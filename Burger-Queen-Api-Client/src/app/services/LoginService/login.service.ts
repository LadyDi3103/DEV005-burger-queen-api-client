import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
Headers
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public apiUrl = 'https://api-mock-laboratoria.onrender.com';
  constructor(private http: HttpClient, private router: Router) { }
//https://api-mock-laboratoria.onrender.com
//http://localhost:8080
  getCredentials(email: string, password: string): Observable<any> { 
    return this.http.post(`${this.apiUrl}/login`, {
    email: email, // traer el valor de los imputs
    password: password, // traaer la información de ambos
    }
    )
  }
  logout(): void {
    // Redirige al usuario a la página de inicio de sesión
    this.router.navigateByUrl('/login');
  }
}





