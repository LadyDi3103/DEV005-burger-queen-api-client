import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  @Input() newItem: any[] = [];

  // clientsName: string = 'DIANA';
  // numOrder: any = '0000000';
  // selectedMenu: string | null = '';
  // counter: number = 1;
  // numTable: number = 0;
  // total: number = 0;
  // totalCost: number = 0;

  // counter: number;
  // totalCost: number;
  // selectedMenu: string;
  // numTable: number;
  // total: number;
  // clientsName: string;
  
  products: any[] = []; // AQUÍ DEBERÍA PUSHEARSE LOS PRODUCTOS AL SELECCIONAR
  // numOrder: new FormControl('0000000'),
  
  // Formulario REACTIVO ****************************************************
  form = new FormGroup({
    clientsName: new FormControl(''),
    numTable: new FormControl(1),
    total: new FormControl(''),
    // totalCost: new FormControl(''),
  });
  //form va toda la data que se ingresa en un input
  counter: number = 1;
  numOrder: string = '0000001';
  // clientsName: string = '';
  // numTable: number = 0;
  // totalCost: number = 0;
  // total: number = 0;
  // counter: number = 1;
//*********************************************************
//cada producto debería tener su propio counter
increase(value:number):void {
  this.counter += value;
  // console.log(this.counter);
  // debe incrementar en el contador de precios unitarios la cantidad del item.
}

decrease(value:number):void {
  if (this.counter > 0) {
    this.counter -= value;
    // console.log(this.counter);
    // debe decrecrementar en el contador de precios unitarios la cantidad del item.
  }
}

  incrementOrderNumber(): void {
    // let number = parseInt(this.numOrder);
    // number++;
    // this.numOrder = number.toString();
    // .padStart(7, '0');
  }
  // decrementOrderNumber() {
  //   let number = parseInt(this.numOrder);
  //   number--;
  //   this.numOrder = number.toString();
  //   // .padStart(7, '0');
  // // }
  // addProduct(): void {
  //   if (this.selectedProduct) {
  //     this.selectedProducts.push(this.selectedProduct);
  //     this.totalCost += this.selectedProduct.price;
  //     this.selectedProduct = null;
  //     console.log(this.selectedProduct, this.totalCost, this.selectedProducts, 126666666 );
      
  //   }

  onSubmitDoThis() {
    // this.incrementOrderNumber()
    // console.log(this.selectedMenu, this.counter, this.numOrder, this.numTable, this.totalCost, this.total, this.numTable.valueOf, this.clientsName, this.clientsName, 49999)

  }
  // calculateTotalCost():void{
  //total es el acumulador- elemento actual ->producto
  //se asigna el valor total en totalCost
  //   this.totalCost= this.products.reduce((total,product) => total + product.cost, 0);
  // {{totalCost}}
  // }
  // ---------- quitar una seleción de producto
  deselectProduct(): void {
    // this.newItem = null;
    // this.menuItem.breakfast.forEach((product)=>{
    //   product.selected = false; // reinicia la selección del producto breakfast
    // });
    // this.menuItem.meals.forEach((product)=>{
    //   product.selected = false; // reinicia la selección del producto meals
    // })
  }
 
  cancelOrder(): void {
    this.form.reset({
      numTable: 0,
       
    });
    this.newItem = [];
  
    }
  }
