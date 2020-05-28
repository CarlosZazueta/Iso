import { Injectable } from '@angular/core';

import { DatosListaCasos } from 'src/app/interfaces/interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { observable } from 'rxjs';

const apiListaCasos = environment.apiListaCasos;
const apiListaCasosPorAutorizarNombre = environment.apiListaCasosPorAutorizarNombre;
const headers = new HttpHeaders({
  'Content-Type': 'application/json; charset=utf-8',
  'Acces-Control-Allow-Methods': 'GET, POST, PUT',
  'Acces-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Origin': '*'
});

@Injectable({
  providedIn: 'root'
})
export class ListaCasosService {

  constructor(private http: HttpClient) { }

  postListaCasos(data: DatosListaCasos) {
    return this.http.post<DatosListaCasos>(apiListaCasos, data, {headers, observe: 'response'});
  }

  postFiltroCasosNombre(nombreUsuario: string) {
    return this.http.post<DatosListaCasos>(apiListaCasosPorAutorizarNombre, {NombreUsuario: nombreUsuario}, {headers, observe: 'response'});
  }
}
