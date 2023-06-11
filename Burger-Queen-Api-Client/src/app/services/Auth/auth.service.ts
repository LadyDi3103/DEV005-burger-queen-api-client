import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router:Router) {}
  login(email: string, password: string): boolean {
    if (email === 'usuario@example.com' && password === '1234567') {
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
