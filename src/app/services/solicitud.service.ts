import { HttpClient } from '@angular/common/http';
// import { Solicitud } from '../models/solicitud';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Solicitud } from '../core/models/solicitud';




@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  solicitudURL = 'http://localhost:4000/api/solicitud'

  constructor(private http:HttpClient) { }

   getSolicitud():  Observable<any> {
     return this.http.get(this.solicitudURL);
   }

  // getSolicitud(id:string): Observable<Solicitud> {
  //   let url = this.solicitudURL + '/solicitud/' + id;
  //   return this.http.get<Solicitud>(url);
  // }

  getSolicitudById(id:any): Observable<any> {
    return this.http.get(`${this.solicitudURL}/${id}`);
  }
  createSolicitud(data: any): Observable<any> {
    return this.http.post(this.solicitudURL, data);
  }
  updateSolicitudById(id: any, data: any): Observable<any> {
    return this.http.put(`${this.solicitudURL}/${id}`, data);
  }
  deleteSolicitudById(id: any, data: any): Observable<any> {
    return this.http.put(`${this.solicitudURL}/${id}`, data);
  }
  

  recuperarEstudiante(id: any, data: any): Observable<any> {
    return this.http.put(`${this.solicitudURL}/${id}`, data);
  }
  // recuperarSolicitud(id: any, data: any): Observable<any> {
  //   return this.http.put(`${this.solicitudURL}/${id}`, data);
  // }


  delete(id: any): Observable<any> {
    return this.http.delete(`${this.solicitudURL}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(this.solicitudURL);
  }
  findByTitle(title: any): Observable<Solicitud[]> {
    return this.http.get<Solicitud[]>(`${this.solicitudURL}?title=${title}`);
  }

}


// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class SolicitudService {

//   private URL = 'http://localhost:4000/api'

//   constructor(private http: HttpClient) { }

//   getSolicitud(){
//     return this.http.get<any>(this.URL + '/solicitud');
//   }
// }
