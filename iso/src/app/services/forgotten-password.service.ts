import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DatosRecuperacionPass } from '../interfaces/interfaces';

const apiForgottenPassword = environment.apiForgottenPassword;
const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});

@Injectable({
  providedIn: 'root'
})
export class ForgottenPasswordService {

  constructor(private http: HttpClient) { }

  postRecuperacionPassword(data: DatosRecuperacionPass) {
    return this.http.post<DatosRecuperacionPass>(apiForgottenPassword, data, {headers});
  }
}
