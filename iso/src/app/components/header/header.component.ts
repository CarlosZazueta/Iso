import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ListaCasosService } from 'src/app/services/lista-casos.service';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  public loading: HTMLIonLoadingElement;
  public busqueda = '';
  public navigationExtras: NavigationExtras;

  constructor(private listaCasosService: ListaCasosService,
              public router: Router,
              public alertController: AlertController,
              public loadingController: LoadingController) { }

  ngOnInit() { }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Por favor espere...',
      duration: 1000
    });
    return await this.loading.present();
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

  openBusquedaEspecificaPage() {
    if (this.busqueda.trim() !== '') {
      this.presentLoading();
      this.listaCasosService.postFiltroCasosNombre(this.busqueda).subscribe((res) => {
        if (res.body.tipo === '200') {
          if (res.body.data === '{"Table":[]}') {
            this.presentAlert('', '', 'Usuario no encontrado!');
            return;
          } else {
            this.navigationExtras = {
              state: {
                usuario: res.body.data
              }
            };
            this.busqueda = '';
            this.router.navigate(['/busqueda-especifica'], this.navigationExtras);
          }
        } else {
          this.presentAlert('', '', 'Usuario no encontrado!');
        }
      });
    } else {
      this.presentAlert('Error!', '', 'Favor de llenar el campo...');
    }
  }
}
