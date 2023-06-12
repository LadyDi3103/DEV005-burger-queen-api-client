import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
// import { Router } from '@angular/router';
// import { AuthService } from 'src/app/services/Auth/auth.service';
// import { ApiService } from 'src/app/services/api/api.service';
// Se importa el módulo Router de @angular/router para poder utilizar la funcionalidad de enrutamiento.
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  email: string = '';
  password: string = '';
  // errorMessagePassword: string = '';
  // errorMessageEmail: string = '';
  errorMessage: string = '';


  constructor(public loginService: LoginService) { }
  ngOnInit() {
    this.loginService.getCredentials().subscribe((data) => {
      console.log('RES 34', data);
    })
  }
  onSubmit(){
    console.log('value')
  }
}


  //   constructor(private authService: AuthService, private router: Router) { }
  //   public onSubmit(): void {
  //     const loggedIn = this.authService.login(this.email, this.password);
  //     console.log(loggedIn);

  // // email: string;
  // // password: string;
  //     if (loggedIn) {
  //       this.router.navigate(['/home']);
  //     } else {
  //       this.errorMessage = 'Wrong Credentials!!!';
  //     }
  //   }