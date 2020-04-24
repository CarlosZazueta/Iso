import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { ForgottenPasswordService } from '../../services/forgotten-password.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  public loading: HTMLIonLoadingElement;

  slideOpts = { allowSlidePrev: false, allowSlideNext: false };

  public usuario = {
    Email: ''
  }

  constructor(private recuperacionService: ForgottenPasswordService,
              public alertController: AlertController,
              public loadingController: LoadingController) { }


  // CONTROLLERS FUNCTIONS
  async presentLoading() {
      this.loading = await this.loadingController.create({
      message: 'Por favor espere...',
    });

    return await this.loading.present();
  }

  async presentAlert(header: string, subHeader: string, message: any) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: subHeader,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  //PROGRAM FUNCTIONS
  ngOnInit() { }

  OnSubmit() {
    this.presentLoading();
    this.recuperacionService.postRecuperacionPassword(this.usuario)
      .subscribe(() => {
        this.loading.dismiss();
        this.usuario.Email = "";
        this.presentAlert("Correcto!", "", "Correo de recuperación enviado con éxito.");
      });
  }

}
