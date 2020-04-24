import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { ApiServiceService } from '../../services/api-service.service';
import { Device } from '@ionic-native/device/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  public loading: HTMLIonLoadingElement;
  public usuario = { idEmpresa: 0, NombreUsuario: '', PasswordUsuario: '', dispositivo: this.device.model };

  slideOpts = { allowSlidePrev: false, allowSlideNext: false };

  constructor(private loginService: ApiServiceService,
    private device: Device,
    private barcodeScanner: BarcodeScanner,
    public alertController: AlertController,
    public loadingController: LoadingController,
    public navController: NavController,
    private router: Router) { }

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

  // PROGRAM FUNCTIONS
  ngOnInit() { }

  Go(url: string = "login-page") {
    this.router.navigate(["/" + url]);
  }

  onSubmit() {
    this.presentLoading();
    this.loginService.postLoginAcces(this.usuario)
      .subscribe(res => {
        this.loading.dismiss();
        if (res.body.tipo === '200') {
          this.Go("control");
        } else {
          this.presentAlert("Error!", "", "Datos incorrectos...");
        }
      });
  }

  scanner() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.loginService.postLoginAccesQR(barcodeData.text)
        .subscribe(res => {
          if (res.body.tipo === '200') {
            this.Go("control");
          } else {
            this.presentAlert("Error!", "", "Datos incorrectos...");
          }
        });
    }).catch(err => {
      this.presentAlert("Error!", "", err);
    });
  }
}
