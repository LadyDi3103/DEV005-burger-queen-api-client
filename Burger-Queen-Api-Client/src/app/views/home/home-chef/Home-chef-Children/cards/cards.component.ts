import { Component, Input } from '@angular/core';
import { DataOrder } from 'src/app/interfaces/interfaces';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Input() orderOne!: any;
  stop: boolean = false;
  time: string = '';

  constructor() {
    console.log(this.orderOne);
  }
  public buttonState: boolean = false;

  public toggleButtonState(): void {
    this.buttonState = !this.buttonState;
    this.stop = !this.stop;
  }
  setTime(time: string):void {
    //checkar para corregir la warra
    if (time.length > 0 && time != 'NaN:NaN:NaN') {
      this.time = time;
    }
    console.log(time, 'TIMEEEEE');
  }
}
