import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPageComponent]
    });
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthService } from 'src/app/services/Auth/auth.service';
// // Se importa el módulo Router de @angular/router para poder utilizar la funcionalidad de enrutamiento.
// @Component({
//   selector: 'app-login-page',
//   templateUrl: './login-page.component.html',
//   styleUrls: ['./login-page.component.css']
// })
// export class LoginPageComponent {
//   email: string = '';
//   password: string = '';
//   // errorMessagePassword: string = '';
//   // errorMessageEmail: string = '';
//   errorMessage: string = '';
//   constructor(private authService: AuthService, private router: Router) { }
//   public onSubmit(): void {
//     const loggedIn = this.authService.login(this.email, this.password);
//     console.log(loggedIn);
//     if (loggedIn) {
//       this.router.navigate(['/home']);
//     } else {
//       this.errorMessage = 'Wrong Credentials!!!';
//     }
//   }
// }