import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/AdminService/admin.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent {
  adminName: string = 'LadyDiana';
  email: string = '';
  password: string = '';
  rol: string = '';
  errorMessage: string = '';

  constructor(private adminService: AdminService, private router: Router) { }
  onSubmit(): void {
    this.adminService.getAccessToken(this.email, this.password, this.rol).subscribe(
      (resp) => {
        console.log(resp, 'VALIDA');
        // if(resp.accessToken){
        //   this.router.navigate(['/home-admin']);
        //   this.email= ' ';
        //   this.password= ' ';
        // }else if(resp.accessToken === undefined){
        //   this.errorMessage = 'Wrong Credentials!!!'
        // }

      },
      //  error: ()=>{
      //   this.errorMessage = 'Wrong Credentials!!!';
      //  }
    )
  }
  closeModal() {

  }
  openModal() {

  }
  logout(): void {
    this.router.navigateByUrl('/login');
  }
}
//TENER EN CUENTA LA DATA HARDCODEADA...
// LAMO AL SERVICIO Y A LA FUNCIÓN Y GUARDO MI RESPUESTA EN EL ARRAY DE PRODUCTOS...
// COPIAR LO DEL LOGIN-PAGE.COMPONENT.TS PARA HACER EL RUTEO RESPECTIVO A HOME-ADMIN
// Y MANEJO DE ERROR




















// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private token: string | null = null;

//   constructor(private http: HttpClient) { }

//   admin(email: string, password: string, role: string): Observable<any> {
//     const credentials = {
//       email,
//       password,
//       role
//     };

//     const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

//     return this.http.post<any>('http://localhost:8080/users', credentials, { headers });
//   }

//   setToken(token: string): void {
//     this.token = token;
//   }

//   getToken(): string | null {
//     return this.token;
//   }

//   isAuthenticated(): boolean {
//     return !!this.token;
//   }
// }
// ---------
// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthService } from 'src/app/services/Auth/auth.service';


// @Component({
//   selector: 'app-home-admin',
//   templateUrl: './home-admin.component.html',
//   styleUrls: ['./home-admin.component.css']
// })
// export class HomeAdminComponent implements OnInit {
//   showModal = false;
//   Email: string = "";
//   password: string = "";
//   rol: string = "";
//   users: any[] = [];

//   constructor(private authService: AuthService, private adminService: AdminService, private router: Router) { }
//   ngOnInit(): void {
//     //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
//     //Add 'implements OnInit' to the class.

//   }
//   openModal() {
//     this.showModal = true;
//   }

//   closeModal() {
//     this.showModal = false;
//     // this.form.reset();
//   }
//   logout(): void {
//     // Redirige al usuario a la página de inicio de sesión
//     this.router.navigateByUrl('/login');
//   }
// }
