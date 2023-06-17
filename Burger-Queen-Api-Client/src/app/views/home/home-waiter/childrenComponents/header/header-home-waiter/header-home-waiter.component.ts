import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/LoginService/login.service';

@Component({
  selector: 'app-header-home-waiter',
  templateUrl: './header-home-waiter.component.html',
  styleUrls: ['./header-home-waiter.component.css']
})
export class HeaderHomeWaiterComponent {
  isModalVisible: boolean = false;
  selectedMenu: string = '';
constructor(private loginService: LoginService, private router: Router) { }


waitersName: string = 'Luis Alvares';


exchangeMenu(menu: string) {
  this.selectedMenu = menu;
  this.isModalVisible = true;
}

  onLogoutClick():void {
    this.loginService.logout();
    // this.router.navigate(['/login']);
  }  
}
