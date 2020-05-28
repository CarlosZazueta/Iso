import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { DatosLogin } from 'src/app/interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { DatosFileDownload, DatosFileUpload } from '../interfaces/interfaces';


const apiLoginUrl = environment.apiLoginUrl;
const apiFileDownload = environment.apiFileDownload;
const apiFileUpload = environment.apiFileUpload;
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
    return this.http.post<DatosLogin>(apiLoginUrl, data, {headers, observe: 'response'});
  }

  postLoginAccesQR(data: string) {
    return this.http.post<DatosLogin>(apiLoginUrl, data, {headers, observe: 'response'});
  }
}
