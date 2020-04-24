import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const apiForgottenPassword = environment.apiForgottenPassword;
const headers = new HttpHeaders({
  'Content-Type': 'application/json; charset=utf-8',
  'Acces-Control-Allow-Methods': 'GET, POST, PUT',
  'Acces-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Origin': '*'
});

@Injectable({
  providedIn: 'root'
})
export class ForgottenPasswordService {

  constructor(private http: HttpClient) { }

  postRecuperacionPassword(data: any) {
    return this.http.post(apiForgottenPassword, data, {headers});
  }
}
