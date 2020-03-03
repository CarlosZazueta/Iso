import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { DatosLogin } from 'src/app/interfaces/interfaces';
import { environment } from 'src/environments/environment';


const apiLoginUrl = environment.apiLoginUrl;
const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  postLoginAcces(data: DatosLogin) {
    return this.http.post<DatosLogin>(apiLoginUrl, data, {headers});
  }
}
