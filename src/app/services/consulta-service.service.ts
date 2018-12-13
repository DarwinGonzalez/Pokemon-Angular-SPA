import { Injectable } from '@angular/core';

import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
// import { baseURL } from '../compartido/baseurl';
import { ProcesaHTTPMsjService } from './procesa-httpmsj.service';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Consulta } from '../shared/contacto';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ConsultaServiceService {

  constructor(private http: HttpClient, private procesaHttpmsjService: ProcesaHTTPMsjService) { }

  enviarConsulta(consulta): Observable<Consulta> {
    let aux = JSON.stringify(consulta);
    localStorage.setItem(consulta.nombre, aux);
    return this.http.post<Consulta>('https://proyectofinal-3a237.firebaseio.com/contacto.json', aux, httpOptions)
      .pipe(catchError(this.procesaHttpmsjService.gestionError));

  }
}