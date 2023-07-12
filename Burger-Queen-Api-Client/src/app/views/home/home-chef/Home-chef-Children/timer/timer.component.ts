import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnChanges{
  minutes: number = 0;
  seconds: number = 0;
  hours: number = 0;
  createTime: string = '';

  // tiempoTranscurrido!: string;
  intervalId: any;

  @Input() dataEntry: string = '';
  @Input() stop: boolean = false;
  @Output() stopTimerTimer: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}
  ngOnInit(): void {
    const time = this.dataEntry.split(' ');
    this.createTime = time[1]
    console.log(this.dataEntry, 'DATAENTRY');
    // this.calcularTiempoTranscurrido();
    this.restHours(this.createTime)  
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('CAMBIO DETECTADO');
    this.stopTimer();
  }

  ngAfterViewInit() {
    this.intervalId = setInterval(() => {
      this.restHours(this.createTime);
    }, 1000);
  }

  restHours(createTime: string) {

    const date = new Date();    
    const hours  = date.getHours();
    const minutes  = date.getMinutes();
    const seconds  = date.getSeconds();
    const currentDate   = `${hours}:${minutes}:${seconds}`; 

    let hora1 = (currentDate).split(":"),
    hora2 = ( createTime).split(":"),
    t1 = new Date(),
    t2 = new Date();
 
    t1.setHours(+hora1[0], +hora1[1], +hora1[2]);
    t2.setHours(+hora2[0], +hora2[1], +hora2[2]);
    
    //Aquí hago la resta
    t1.setHours(
    t1.getHours() - t2.getHours(), 
    t1.getMinutes() - t2.getMinutes(), 
    t1.getSeconds() - t2.getSeconds()
    );

    this.hours = t1.getHours();
    this.minutes = t1.getMinutes();
    this.seconds = t1.getSeconds();
  }
  stopTimer() {
    clearInterval(this.intervalId);
    // this.timerRunning = false;
    this.calculateElapsedTime();
    // this.timerStopped.emit(this.stopTimer.bind(this));
    // esto es lo que debemos enviar al papá en el event emiter
  }
  calculateElapsedTime() {
    const date = new Date(); // Obtengo la hora Actual del Sistema
    const hours = date.getHours(); // Hora
    const minutes = date.getMinutes(); // Minutos
    const seconds = date.getSeconds(); // Segundos
    const currentTime = `${hours}:${minutes}:${seconds}`; //Se genera una Cadena con los Datos Obtenidos en c/Cont
    // Dos Objetos de Fecha t1 y t2
    let t1 = new Date();
    let t2 = new Date();
    let elapsedTimeMs = 0;
    // Metodo split para Dividir currentTime en un array de tres Elementos
    t1.setHours(+currentTime.split(':')[0], +currentTime.split(':')[1], +currentTime.split(':')[2]);
    // Con el operador '+' se convierte cada elemento en un numero
    t2.setHours(+this.createTime.split(':')[0], +this.createTime.split(':')[1], +this.createTime.split(':')[2]);

    elapsedTimeMs = t1.getTime() - t2.getTime();
    let elapsedTime = this.formatElapsedTime(elapsedTimeMs);
    console.log(hours, 'TIEMPO TRANSCURRIDO');
    //check donde se convierte en NaN y que rompe la lógica
    this.stopTimerTimer.emit(elapsedTime)
  }

  formatElapsedTime(elapsedTimeMs: number): string {
    const totalSeconds = Math.floor(elapsedTimeMs / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours}:${minutes}:${seconds}`;
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
