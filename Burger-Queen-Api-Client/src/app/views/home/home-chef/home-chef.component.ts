import { Component, OnInit } from '@angular/core';
import { LoginModule } from '../../login/login.module';
import { LoginService } from 'src/app/services/LoginService/login.service';
import { Router } from '@angular/router';
import { OrderService } from '../../../services/OrderService/order.service';
import { DataOrder } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-home-chef',
  templateUrl: './home-chef.component.html',
  styleUrls: ['./home-chef.component.css'],
})
export class HomeChefComponent implements OnInit {
  chefName: string = 'IndiraDavoin';
  orders: any = '';
  // dataEntry : Date;
  
  formattedDate: any = '';
  constructor(private orderService: OrderService, private loginService: LoginService, private router: Router) { }
  ngOnInit() {
    // this.dataEntry = new Date();
    // this.formattedDate = this.dataEntry.toLocaleString('es-ES', { 
    //   year: 'numeric',
    //   month: '2-digit',
    //   day: '2-digit',
    //   hour: '2-digit',
    //   minute: '2-digit',
    //   second: '2-digit'
    // }),
    this.getWaitersOrders();
  }
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
  logout(): void {
    this.router.navigateByUrl('/login');
  }
  // Papá o hijo? Hacer una fn que al darle click al botón TO PREPARE, detiene el timer, captura la hora en que se dió el click y se manda ese dato en el body en una propiedad DateProceed y que cambie el estado de pending a toDeliver
}
