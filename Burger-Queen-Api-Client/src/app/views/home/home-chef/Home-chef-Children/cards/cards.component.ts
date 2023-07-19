import { Component, Input } from '@angular/core';
import { OrderService } from 'src/app/services/OrderService/order.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Input() orderOne!: any;
  stop: boolean = false;
  time: string = '';
  public newOrder: any;
  allOrders: any;
  pendingOrders: any[] = [];
  deliveredOrders: any[] = [];

  constructor(private orderService: OrderService) { }

  public buttonState: boolean = false;

  public toggleButtonState(): void {
    this.buttonState = !this.buttonState;
    this.statusOrder(this.orderOne.id, 'delivered')
    this.stop = !this.stop;
  }
  setTime(time: string): void {
    //checkar para corregir la warra
    if (time.length > 0 && time != 'NaN:NaN:NaN') {
      this.time = time;
    }
    console.log(time, 'TIMEEEEE');
  }
  statusOrder(id: any, status: 'delivered') {
    this.orderService.changeStatusOrder(id, status).subscribe((resp) => {
      console.log(resp, 'RESPstatusOrder');
      this.newOrder = resp;
    })
  }
  // getAllOrders(): void {
  //   this.orderService.getOrders().subscribe((resp) => {
  //     console.log(resp, 'ALLORDERS');
  //     this.allOrders = resp;
  //     // this.filterCardsByStatus();
  //   })
  // }
  // filterCardsByStatus() {
  //   this.pendingOrders = this.allOrders.filter((order:any) => order.status === 'pending')
  //   console.log(this.pendingOrders, 'PENDING ORDERS');
  //   this.deliveredOrders = this.allOrders.filter((order:any) => order.status === 'delivered')
  //   console.log(this.deliveredOrders, 'DELIVERED ORDERS');
  // }
  // filterUsersByRole() {
  //   this.adminUsers = this.users.filter(user => user.role === 'admin');
  //   this.chefUsers = this.users.filter(user => user.role === 'chef');
  //   this.waiterUsers = this.users.filter(user => user.role === 'waiter');

  //   this.filteredUsers = this.users.filter(user => {
  //     return user.role === this.selectedRole || this.selectedRole === '';
  //   });
  // }
}
