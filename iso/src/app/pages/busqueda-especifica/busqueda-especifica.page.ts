import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosListaCasos } from 'src/app/interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { AlertController } from '@ionic/angular';

const url = environment.apiFileDownload;

@Component({
  selector: 'app-busqueda-especifica',
  templateUrl: './busqueda-especifica.page.html',
  styleUrls: ['./busqueda-especifica.page.scss'],
})

export class BusquedaEspecificaPage implements OnInit {
  public casos: DatosListaCasos[] = [];
  private dataRecived: DatosListaCasos;

  public href = '';

  constructor(private activatedRoute: ActivatedRoute, private router: Router, public alertController: AlertController) {
    this.activatedRoute.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.dataRecived = JSON.parse(this.router.getCurrentNavigation().extras.state.usuario);
        this.casos.push(...this.dataRecived.Table);
      }
    });
  }

  ngOnInit() { }

  async presentAlert(header: string, subHeader: string, message: any) {
    const alert = await this.alertController.create({
      header,
      subHeader,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

  downloadFile(caso: DatosListaCasos) {
    if (caso.Nombre == null || caso.Nombre.trim() === '') {
      this.presentAlert('Oops!', '', 'No hay archivo relacionado al caso.');
    } else {
      this.href = url + '?filename=' + caso.Nombre + '&idCaso=' + caso.idCaso + '&idusuario=' + caso.idUsuario;
    }
  }
}
