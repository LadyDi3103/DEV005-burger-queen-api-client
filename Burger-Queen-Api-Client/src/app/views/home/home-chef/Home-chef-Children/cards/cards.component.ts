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

  constructor(private orderService: OrderService) {}
  
  public buttonState: boolean = false;

  public toggleButtonState(): void {
    this.buttonState = !this.buttonState;
    this.statusOrder(this.orderOne.id, 'delivered')
    this.stop = !this.stop;
  }
  setTime(time: string):void {
    //checkar para corregir la warra
    if (time.length > 0 && time != 'NaN:NaN:NaN') {
      this.time = time;
    }
    console.log(time, 'TIMEEEEE');
  }
  statusOrder(id:any, status: 'delivered'){
    this.orderService.changeStatusOrder(id, status).subscribe((resp) =>{
      console.log(resp, 'RESPstatusOrder');
      this.newOrder = resp;
    })
  }
}
