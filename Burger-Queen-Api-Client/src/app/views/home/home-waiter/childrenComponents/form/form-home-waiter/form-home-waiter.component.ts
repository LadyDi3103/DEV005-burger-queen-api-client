import { Component, Input } from '@angular/core';
import { __values } from 'tslib';
// import { products } from '../../menu/products/produts';

@Component({
  selector: 'app-form-home-waiter',
  templateUrl: './form-home-waiter.component.html',
  styleUrls: ['./form-home-waiter.component.css'],
})
export class FormHomeWaiterComponent {
  //FN TO OBTAIN DATA FROM MENU
  @Input() data: any;
  // console.log(this.data, 'RES INPUT FORM');
  // ejemplo
  @Input() nombre: string = '';
  @Input() nota: number = 0;
  @Input() alumno: any;

  @Input() newItem: any[] = [];

  clientsName: string = 'DIANA';
  numOrder: any = '0000000';
  // isModalVisible: boolean = false;
  selectedMenu: string | null = '';
  counter: number = 1;
  // waitersName: string = 'Luis Alvares';
  numTable: number = 0;

  total: number = 0;
  totalCost: number = 0;
  //miembros de la clase/ petición al backend...
  products: any[] = []; // AQUÍ DEBERÍA PUSHEARSE LOS PRODUCTOS AL SELECCIONAR

  increase() {
    this.counter++;
    console.log(this.counter);
    // debe incrementar en el contador de precios unitarios la cantidad del item.
  }

  decrease() {
    if (this.counter > 0) {
      this.counter--;
      console.log(this.counter);
      // debe decrecrementar en el contador de precios unitarios la cantidad del item.
    }
  }
  incrementOrderNumber(): void {
    let number = parseInt(this.numOrder);
    number++;
    this.numOrder = number.toString();
    // .padStart(7, '0');
  }
  decrementOrderNumber() {
    let number = parseInt(this.numOrder);
    number--;
    this.numOrder = number.toString();
    // .padStart(7, '0');
  }


  onSubmitDoThis() {
    this.incrementOrderNumber()
    console.log(this.selectedMenu, this.counter, this.numOrder, this.numTable, this.totalCost, this.total, this.numTable.valueOf, this.clientsName, this.clientsName, 49999)

  }
  // calculateTotalCost():void{
  //total es el acumulador- elemento actual ->producto
  //se asigna el valor total en totalCost
  //   this.totalCost= this.products.reduce((total,product) => total + product.cost, 0);
  // {{totalCost}}
  // }
  // ---------- quitar una seleción de producto
  deselectProduct(): void {
    this.selectedMenu = null;
    // this.menuItem.breakfast.forEach((product)=>{
    //   product.selected = false; // reinicia la selección del producto breakfast
    // });
    // this.menuItem.meals.forEach((product)=>{
    //   product.selected = false; // reinicia la selección del producto meals
    // })
  }

  cancelOrder(): void {
    console.log('CANCEL ORDER2');
    //reiniciar los valores relacionados con la orden
    console.log(this.clientsName);
    
    this.clientsName = ' ';        //no reinicia el nombre del cliente
    this.numOrder = this.decrementOrderNumber();
    this.selectedMenu = ' ';
    this.counter = 0;
    this.numTable = 0;             //no reinicia
    this.total = 0;
    this.totalCost = 0;
    

    // this.selectedProduct = null;
    // //restaurar los valores predeterminados de los productos
    // }
  }
}