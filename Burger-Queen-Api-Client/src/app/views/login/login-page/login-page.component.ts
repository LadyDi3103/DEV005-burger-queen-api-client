import { HttpErrorResponse } from '@angular/common/http';
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
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  // errorMessagePassword: string = '';
  // errorMessageEmail: string = '';

  constructor(private loginService: LoginService, private router: Router) { }

  onSubmit(): void {
    // JUGAR CON ESTO LÍNEA 21
    this.loginService.getCredentials(this.email, this.password).subscribe((resp)=>{
      console.log('RESP', resp);      
      if (resp.accessToken) {
        // console.log('ESTATUS',(resp.status));        
        this.router.navigate(['/home']);
        this.email= ' ';
        this.password= ' ';
      } else {
        this.errorMessage = 'Wrong Credentials!!!';
      };
      (err: HttpErrorResponse)=>{
        console.log("Error.");
      }
      // if(HttpErrorResponse){
      //   this.router.navigate(['/home']);
      // }
    })
  }
  
  // console.log('error',HttpErrorResponse);
  // subscribirme y leer lo del backend para leer
//   queremos subcribirnos a su respuesta
}