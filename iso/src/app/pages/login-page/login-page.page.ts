import { Component, OnInit } from '@angular/core';

import { DatosLogin } from 'src/app/interfaces/interfaces';
import { ApiServiceService } from '../../services/api-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  //Crear objeto TODO
  private data: DatosLogin;

  private usuario = {
    empresa: '',
    usuario: '',
    password: '',
    dispositivo: ''
  }

  slideOpts = {
    allowSlidePrev: false,
    allowSlideNext: false
  };

  constructor(private loginService: ApiServiceService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.usuario);
  }

}
