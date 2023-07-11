import { Component, Input } from '@angular/core';
import { DataOrder } from 'src/app/interfaces/interfaces';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Input() orderOne: any = {};

  constructor(){
  console.log(this.orderOne);
  }
  public buttonState: boolean = false;

  public toggleButtonState(): void {
    this.buttonState = !this.buttonState;
  }

}
