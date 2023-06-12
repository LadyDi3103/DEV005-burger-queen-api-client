import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) {}
  getCredentials(): Observable<any> {
    return this.http.post('http://localhost:8080/login', {
      "email":"anita.borg@systers.xyz" ,
      "password": "123456",
    })
  }
}
