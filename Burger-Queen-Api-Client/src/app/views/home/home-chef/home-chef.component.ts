import { Component, OnInit } from '@angular/core';
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
  orders: any = '';
  selectedFilter: string = 'pending';
  formattedDate: any = '';
  pendingOrders: any[] = [];
  deliveredOrders: any[] = [];
  constructor(private orderService: OrderService, private loginService: LoginService, private router: Router) { }
  ngOnInit() {
    // this.filterCardsByStatus();
    this.getWaitersOrders(); 
    // no va this.getWaitersOrders();
    // if status order filtrado por pending.. mostrar en tal pestaña
    // if status order filtrado por deliverd.. mostrar en otra pestaña
  }
  getWaitersOrders(): void {
    this.orderService.getOrders().subscribe({
      next: (resp) => {
        console.log(resp);
        this.orders = resp; 
        // this.sortOrders();
        this.filterCardsByStatus();
        // llamar nuevamente el método para actualizar ¿?
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

// REVISAR LA FUNCIÓN.. VER LO DEL LLAMADO DE LAS ÓRDENES Y INCORPORAR EN EL FILTERCARDS BY STATUS
  //verify sí el arreglo local, asegurar lo del patch... luego jalar el arreglo completo
    filterCardsByStatus() {
    this.pendingOrders = this.orders.filter((order:any) => order.status === 'pending')
    console.log(this.pendingOrders, 'PENDING ORDERS');
    this.deliveredOrders = this.orders.filter((order:any) => order.status === 'delivered')
    console.log(this.deliveredOrders, 'DELIVERED ORDERS');
  }

  // sortOrders():void{
  //   this.orders.sort((a: any, b: any)=>{
  //     const dateA = new Date(a.formattedDate);
  //     const dateB = new Date(b.formattedDate);
  //     return dateA.getTime() - dateB.getTime();
  //   });
  // }
  showTabContent(status: string): void {
    this.selectedFilter = status;
  }
  logout(): void {
    this.router.navigateByUrl('/login');
  }
  // Papá o hijo? Hacer una fn que al darle click al botón TO PREPARE, detiene el timer, captura la hora en que se dió el click y se manda ese dato en el body en una propiedad DateProceed y que cambie el estado de pending a toDeliver
}
