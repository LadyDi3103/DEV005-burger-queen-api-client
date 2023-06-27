// import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/LoginService/login.service';

// Se importa el módulo Router de @angular/router para poder utilizar la funcionalidad de enrutamiento.
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  public email: string = '';
  public password: string = '';
  public errorMessage: string = '';
  // errorMessagePassword: string = '';
  // errorMessageEmail: string = '';

  constructor(private loginService: LoginService, private router: Router) { }
  //evaluar que esté logeada ¿?
  onSubmit(): void {
    this.loginService.getCredentials(this.email, this.password).subscribe({
      next: (resp) => {
        console.log('RESP', resp);
        if (resp.user.rol === 'waiter') {
          this.router.navigate(['/home-waiter']);
          this.email = ' ';
          this.password = ' ';
        } if (resp.user.rol === 'chef') {
          this.router.navigate(['/home-chef']);
          this.email = ' ';
          this.password = ' ';
        } if (resp.user.rol === 'admin') {
          this.router.navigate(['/home-admin']);
          this.email = ' ';
          this.password = ' ';
        } else if (resp.accessToken === undefined) {
          this.errorMessage = 'Wrong Credentials!!!';
        }
        //observables reciben de otra forma los errores 
      },
      error: () => {
        this.errorMessage = 'Wrong Credentials!!!';
      }
    })
  }
  //queremos subcribirnos a su respuesta
}