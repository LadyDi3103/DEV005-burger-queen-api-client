import { Component, OnInit } from '@angular/core';
import { LoginModule } from '../../login/login.module';
import { LoginService } from 'src/app/services/LoginService/login.service';
import { Router } from '@angular/router';
import { OrderService } from '../../../services/OrderService/order.service';

@Component({
  selector: 'app-home-chef',
  templateUrl: './home-chef.component.html',
  styleUrls: ['./home-chef.component.css'],
})
export class HomeChefComponent implements OnInit {
  chefName: string = 'IndiraDavoin';
  public buttonState: boolean = false;
  orders: any = '';

  constructor(private orderService: OrderService, private loginService: LoginService, private router: Router) { }
  getWaitersOrders(): void {
    this.orderService.getOrders().subscribe({
      next: (resp) => {
        console.log(resp);
        this.orders = resp;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  ngOnInit() {
    this.getWaitersOrders();
  }
  public toggleButtonState(): void {
    this.buttonState = !this.buttonState;
  }
  logout(): void {
    this.router.navigateByUrl('/login');
  }
}
