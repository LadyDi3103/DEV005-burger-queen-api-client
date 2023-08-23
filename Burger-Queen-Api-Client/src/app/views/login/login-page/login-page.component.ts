import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/LoginService/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  public email: string = '';
  public password: string = '';
  public errorMessage: string = '';

  constructor(private loginService: LoginService, private router: Router) { }

  onSubmit(): void {
    this.loginService.getCredentials(this.email, this.password).subscribe({
      next: (resp) => {
        localStorage.setItem("accessToken", resp.accessToken)
        localStorage.setItem("role", resp.user.role)
        if (resp.user.role === 'waiter') {
          this.router.navigate(['/home-waiter']);
        } else if (resp.user.role === 'chef') {
          this.router.navigate(['/home-chef']);
        } else if (resp.user.role === 'admin') {
          this.router.navigate(['/home-admin']);
        } else {
          this.errorMessage = 'Wrong Credentials!!!';
        }
        this.email = ' ';
        this.password = ' '; //observables reciben de otra forma los errores 
      },
      error: () => {
        this.errorMessage = 'Wrong Credentials!!!';
      }
    })
  }
}