import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { __values } from 'tslib';
import { Output, EventEmitter } from '@angular/core';
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  type: string;
}
interface GetProduct {
  qty: number;
  product: Product;
}
@Component({
  selector: 'app-form-home-waiter',
  templateUrl: './form-home-waiter.component.html',
  styleUrls: ['./form-home-waiter.component.css'],
})
export class FormHomeWaiterComponent {

  @Output() newEvent = new EventEmitter<any>();
  @Input() newItem: any[] = [];
  // @Input() data: any;

  // F O R M  R E A C T I V O
   form = new FormGroup({
    clientsName: new FormControl(''),
    numTable: new FormControl(0),
    total: new FormControl(''),
    // totalCost: new FormControl(''),
  });
  //form va toda la data que se ingresa en un input
  counter: number = 1;
  numOrder: string = '0000001';
  //*********************************************************
  //EMIT emite valores ny luego debo configurar al papá para que reciba este valor
  sendValue() {
    this.newEvent.emit(this.newItem);
    console.log(this.newItem, 'LÍNEAAAA56FORM');
  } // lo envio vacio.
  
  cancelOrder(): void {
    this.form.reset({
      numTable: 0,
    });
    this.newItem = [];
    this.sendValue();
  }

  increase(value: number): void {
    // this.newItem[i].product.qty.find(product => product.id===this.newItem[i].product.qty)?.qty += value;
    // console.log(this.increase(+1), 'linea 54');
    
    // this.newItem += value;
  }
  
  decrease(value: number): void {
    if (this.counter > 0) {
      this.counter -= value;
      // console.log(this.counter);
      // debe decrecrementar en el contador de precios unitarios la cantidad del item.
    }
  }

  incrementOrderNumber(): void {
    let number = parseInt(this.numOrder);
    number++;
    this.numOrder = number.toString().padStart(7, '0');
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
    this.incrementOrderNumber()
    // console.log(this.selectedMenu, this.counter, this.numOrder, this.numTable, this.totalCost, this.total, this.numTable.valueOf, this.clientsName, this.clientsName, 49999)

  }
  // calculateTotalCost():void{
  //total es el acumulador- elemento actual ->producto
  //se asigna el valor total en totalCost
  //   this.totalCost= this.products.reduce((total,product) => total + product.cost, 0);
  // {{totalCost}}
  // }
  // ---------- quitar una seleción de producto
  deselectProduct(product: any): void {
   const index = this.newItem.indexOf(product);
    if (index !== -1){
      this.newItem.splice(index, 1);
      // this.totalCost -= product.price;
    }
  }
    
  // deleteSelection(product: Product): void {
  //   const index = this.selectedProducts.indexOf(product);
  //   if (index !== -1) {
  //     this.selectedProducts.splice(index, 1);
  //     this.totalCost -= product.price;
  //     console.log(product.price);
      
    // this.newItem.forEach((product) => {
    //   product.selected = false; // reinicia la selección del producto breakfast
    // });
    // this.newItem.forEach((product) => {
    //   product.selected = false; // reinicia la selección del producto meals
    // })
  }

