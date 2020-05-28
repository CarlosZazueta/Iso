import { Component, OnInit, ViewChild } from '@angular/core';
import { ListaCasosService } from '../../services/lista-casos.service';
import { IonSegment, ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosListaCasos, DatosLogin } from 'src/app/interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { AlertController } from '@ionic/angular';
import { AddFilePage } from '../add-file/add-file.page';

const url = environment.apiFileDownload;

@Component({
  selector: 'app-control',
  templateUrl: './control.page.html',
  styleUrls: ['./control.page.scss'],
})
export class ControlPage implements OnInit {

  constructor(private listaCasosService: ListaCasosService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              public alertController: AlertController,
              public modalController: ModalController) {

    this.activatedRoute.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.dataRecived = JSON.parse(this.router.getCurrentNavigation().extras.state.usuario);
      }

      this.Usuario.idUsuario = this.dataRecived.Table[0].idUsuario;
    });
  }
  @ViewChild(IonSegment, { static: true }) segment: IonSegment;

  private casos: DatosListaCasos[] = [];
  private dataRecived: DatosLogin;

  public href = '';
  public Usuario = { idUsuario: 0 };
  public data: DatosListaCasos;
  public filter: DatosListaCasos[] = [];
  public categorias: string[] = ['Todo', 'Autorizados', 'Pendientes', 'Rechazados'];

  ngOnInit() {
    this.segment.value = this.categorias[0];
    this.cargarCasos(3);
  }

  async presentAlert(header: string, subHeader: string, message: any) {
    const alert = await this.alertController.create({
      header,
      subHeader,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

  private filterByCase = (caso: DatosListaCasos[], aut: number) => caso.filter(c => c.Autorizado === aut);


  cambioCategoria(event: any) {
    this.filter = [];

    switch (event.detail.value) {
      case 'Autorizados':
        this.cargarCasos(1);
        break;
      case 'Pendientes':
        this.cargarCasos(0);
        break;
      case 'Rechazados':
        this.cargarCasos(2);
        break;
      case 'Todo':
        this.cargarCasos(3);
        break;
    }
  }

  downloadFile(caso: DatosListaCasos) {
    if (caso.Nombre == null || caso.Nombre.trim() === '') {
      this.presentAlert('Oops!', '', 'No hay archivo relacionado al caso.');
    } else {
      this.href = url + '?filename=' + caso.Nombre + '&idCaso=' + caso.idCaso + '&idusuario=' + caso.idUsuario;
    }
  }

  async addFile() {
    const modal = await this.modalController.create({
      component: AddFilePage
    });

    return await modal.present();
  }

  cargarCasos(aut: number) {
    this.listaCasosService.postListaCasos(this.Usuario).subscribe(res => {
      if (res.body.tipo === '200') {
        this.data = JSON.parse(res.body.data);
        this.casos = [];
        if (aut === 3) {
          this.filter.push(...this.data.Table);
        } else {
          this.casos.push(...this.data.Table);
          this.filter.push(...this.filterByCase(this.casos, aut));
        }
      }
    });
  }
}
