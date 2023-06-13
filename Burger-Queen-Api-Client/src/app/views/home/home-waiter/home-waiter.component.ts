import { Component } from '@angular/core';
// import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
// import { AuthService } from 'src/app/services/Auth/auth.service';
import { LoginService } from 'src/app/services/LoginService/login.service';


@Component({
  selector: 'app-home-waiter',
  templateUrl: './home-waiter.component.html',
  styleUrls: ['./home-waiter.component.css']
})
export class HomeWaiterComponent {
  isModalVisible: boolean = false;
  selectedMenu: string = '';
  counter: number = 1;
  waitersName: string = 'Luis Alvares';
  clientsName: any = '';
  numOrder: number = 0o1;
  numTable: number = 0;
  total: number= 0;
  
  constructor(private loginService: LoginService, private router: Router) { }

  exchangeMenu(menu: string) {
    this.selectedMenu = menu;
    this.isModalVisible = true;
  }

  onLogoutClick():void {
    this.loginService.logout();
    // this.router.navigate(['/login']);
  }
  increase(){
    this.counter++;
  }
  decrease(){
    this.counter--;
  }
  onSubmitDoThis(){
console.log('hello');
  }
}