import { Component, OnInit } from '@angular/core';

import { DatosLogin } from 'src/app/interfaces/interfaces';
import { ApiServiceService } from '../../services/api-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  // Crear objeto TODO
  private usuario = { empresa: 0, usuario: '', password: '', dispositivo: '' };

  private newData: DatosLogin = {
    PasswordUsuario: this.usuario.password.trim(),
    NombreUsuario: this.usuario.usuario.trim(),
    idEmpresa: this.usuario.empresa,
    dispositivo: this.usuario.dispositivo.trim()
  };

  slideOpts = { allowSlidePrev: false, allowSlideNext: false };

  constructor(private loginService: ApiServiceService) { }

  ngOnInit() {}

  onSubmit() {
   this.loginService.postLoginAcces(this.newData)
    .subscribe(res => {
       console.log(JSON.stringify(res));
     });
  }

}
