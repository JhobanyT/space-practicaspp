import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  personaURL = 'http://localhost:4000/api/persona'

  constructor(private http:HttpClient) { }

  getPersonas(): Observable<any> {
    return this.http.get(this.personaURL);
  }
  getPersonaById(id:any): Observable<any> {
    return this.http.get(`${this.personaURL}/${id}`);
  }
  createPersona(data: any): Observable<any> {
    return this.http.post(this.personaURL, data);
  }
  updatePersonaById(id: any, data: any): Observable<any> {
    return this.http.put(`${this.personaURL}/${id}`, data);
  }
  deletePersonaById(id: any, data: any): Observable<any> {
    return this.http.put(`${this.personaURL}/${id}`, data);
  }
  
}
