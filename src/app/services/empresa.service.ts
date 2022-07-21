import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empresa } from '@core/models/empresa';
import { map, Observable } from 'rxjs';
import { Solicitud } from '../core/models/solicitud';


@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  empresaURL = 'http://localhost:4000/api/empresa'

  constructor(private http:HttpClient) { }

  getEmpresa():  Observable<any> {
    return this.http.get(this.empresaURL);
  }

  getEmpresaById(id:any): Observable<any> {
    return this.http.get(`${this.empresaURL}/${id}`);
  }
  createEmpresa(data: any): Observable<any> {
    return this.http.post(this.empresaURL, data);
  }
  updateEmpresaById(id: any, data: any): Observable<any> {
    return this.http.put(`${this.empresaURL}/${id}`, data);
  }
  deleteEmpresaById(id: any, data: any): Observable<any> {
    return this.http.put(`${this.empresaURL}/${id}`, data);
  }


  delete(id: any): Observable<any> {
    return this.http.delete(`${this.empresaURL}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(this.empresaURL);
  }
  findByTitle(title: any): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(`${this.empresaURL}?title=${title}`);
  }
}
