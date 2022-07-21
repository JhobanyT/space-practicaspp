import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConvenioService {
  convenioURL = 'http://localhost:4000/api/solicitud'

  constructor(private http:HttpClient) { }
  getConvenio():  Observable<any> {
    return this.http.get(this.convenioURL);
  }
}
