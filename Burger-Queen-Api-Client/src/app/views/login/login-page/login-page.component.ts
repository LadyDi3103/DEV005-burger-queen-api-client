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
    const loggedIn = this.loginService.login(this.email, this.password);
    console.log(loggedIn);
      if (loggedIn) {
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Wrong Credentials!!!';
    }
  }
//ngOnInit():
  // auth: Credential
  // getAuth(){
  //   this.loginService.getCredentials().subscribe((resp)=>{
  // console.log(resp);
  // }}

}