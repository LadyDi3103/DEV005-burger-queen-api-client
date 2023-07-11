import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit{
  minutes: number = 0;
  seconds: number = 0;
  hours: number = 0;
  createTime: string = '';

  @Input() dataEntry: string = '';

  constructor() {}
  ngOnInit(): void {
    const time = this.dataEntry.split(' ');
    this.createTime = time[1]

    this.restHours(this.createTime)  
  }

  ngAfterViewInit() {
    setInterval(() => {
      this.restHours(this.createTime );
    }, 1000);
  }

  restHours(createTime: string) {

    const date = new Date();    
    const hours  = date.getHours();
    const minutes  = date.getMinutes();
    const seconds  = date.getSeconds();
    const currentDate   = `${hours}:${minutes}:${seconds}` 

    let hora1 = (currentDate).split(":"),
    hora2 = ( createTime).split(":"),
    t1 = new Date(),
    t2 = new Date();
 
    t1.setHours(+hora1[0], +hora1[1], +hora1[2]);
    t2.setHours(+hora2[0], +hora2[1], +hora2[2]);
    
    //Aquí hago la resta
    t1.setHours(t1.getHours() - t2.getHours(), t1.getMinutes() - t2.getMinutes(), t1.getSeconds() - t2.getSeconds());

    this.hours = t1.getHours();
    this.minutes = t1.getMinutes();
    this.seconds = t1.getSeconds();
  }

// startTimer(){
//   this.timer= setInterval(()=>{
// if(this.seconds< 59){
//   this.seconds++;
// }else{
//   this.seconds = 0;
//   this.minutes++;
// }
// }, 1000);
// }
// stopTimer(){
// clearInterval(this.timer);
// }

// resetTimer(){
//   this.minutes = 0;
//   this.seconds= 0;
//   clearInterval(this.timer);
// }

}
