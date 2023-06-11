import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth/auth.service';

@Component({
  selector: 'app-home-waiter',
  templateUrl: './home-waiter.component.html',
  styleUrls: ['./home-waiter.component.css']
})
export class HomeWaiterComponent {
  isModalVisible: boolean = false;
  selectedMenu: string = '';
  
  constructor(private authService: AuthService, private router: Router) { }

  exchangeMenu(menu: string) {
    this.selectedMenu = menu;
    this.isModalVisible = true;
  }

  onLogoutClick():void {
    this.authService.logout();
    // this.router.navigate(['/login']);
  }
}