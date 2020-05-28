import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { DatosFileUpload } from '../interfaces/interfaces';

const apiFileUpload = environment.apiFileUpload;
const headers = new HttpHeaders({
  'Content-Type': 'multipart/form-data;  boundary=<calculated when request is sent>',
  'Acces-Control-Allow-Methods': 'GET, POST, PUT',
  'Acces-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Origin': '*'
});

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(private http: HttpClient) { }

  postUploadfile(data: DatosFileUpload, file: object) {
    const params = new HttpParams()
    .set('idCaso', data.idCaso.toString())
    .set('idusuario', data.idUsuario.toString());

    return this.http.post<DatosFileUpload>(apiFileUpload, file, {headers, observe: 'response', params});
  }
}
