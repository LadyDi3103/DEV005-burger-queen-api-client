import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router) { }
//
  getCredentials(body: {}): Observable<any> {
    return this.http.post('http://localhost:8080/login', body)
  }

  login(email: string, password: string): boolean {
    if (email === 'anita.borg@systers.xyz' && password === 'g6WQSrsv7rC7et5B') {
      return true; // Credenciales válidas, retorna true para indicar que el inicio de sesión fue exitoso
    } else {
      return false; // Credenciales inválidas, retorna false para indicar que el inicio de sesión falló
    }
  }

  logout(): void {
    // Redirige al usuario a la página de inicio de sesión
    this.router.navigateByUrl('/login');
  }
}





