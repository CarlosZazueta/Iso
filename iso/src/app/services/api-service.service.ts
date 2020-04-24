import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { DatosLogin } from 'src/app/interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { BarcodeScanResult } from '@ionic-native/barcode-scanner/ngx';


const apiLoginUrl = environment.apiLoginUrl;
const headers = new HttpHeaders({
  'Content-Type': 'application/json; charset=utf-8',
  'Acces-Control-Allow-Methods': 'GET, POST, PUT',
  'Acces-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Origin': '*'
});

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  postLoginAcces(data: DatosLogin) {
    //console.log(data.NombreUsuario + " " + data.PasswordUsuario);
    return this.http.post<DatosLogin>(apiLoginUrl, data, {headers, observe: 'response'});
  }

  postLoginAccesQR(data: string) {
    //console.log(data.NombreUsuario + " " + data.PasswordUsuario);
    return this.http.post<DatosLogin>(apiLoginUrl, data, {headers, observe: 'response'});
  }

}
