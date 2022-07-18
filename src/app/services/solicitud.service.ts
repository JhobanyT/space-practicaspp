import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  private URL = 'http://localhost:4000/api'

  constructor(private http: HttpClient) { }

  getSolicitud(){
    return this.http.get<any>(this.URL + '/solicitud');
  }
}
