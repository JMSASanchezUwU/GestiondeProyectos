import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  url = 'http://192.168.49.2:30444/api/Rol/';

  constructor(private http: HttpClient) {}

  getRoles(): Observable<any>{
    return this.http.get(this.url);
  }
}