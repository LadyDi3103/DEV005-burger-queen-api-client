// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { Observable } from 'rxjs';

// @Injectable({
//     providedIn: 'root'
// })
// export class AuthService {
//     private token: string | null = null;

//     constructor(private http: HttpClient, private router: Router) { }
//     //admin
//     getAuth(email: string, password: string, role: string): Observable<any> {
//         return this.http.post('http://localhost:8080/users', {
//             email: email, // traer el valor de los imputs
//             password: password,
//             role: role, // traaer la información de ambos
//         }
//         )
        // if (email === 'usuario@example.com' && password === '1234567') {
        //   return true; // Credenciales válidas, retorna true para indicar que el inicio de sesión fue exitoso
        // } else {
        //   return false; // Credenciales inválidas, retorna false para indicar que el inicio de sesión falló
    // }
    // logout(): void {
        // Redirige al usuario a la página de inicio de sesión
        // this.router.navigateByUrl('/login');
  
// }

