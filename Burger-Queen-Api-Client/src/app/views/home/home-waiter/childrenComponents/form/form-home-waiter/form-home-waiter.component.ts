import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
  @Input() newItem: GetProduct[] = [];
  numOrder: string = '0000001';
  totalCost: number = 0;

  // F O R M  R E A C T I V O
  form = new FormGroup({
    clientsName: new FormControl(''),
    numTable: new FormControl(0),
    total: new FormControl(''),
    totalCost: new FormControl(''),
  });
  //form va toda la data que se ingresa en un input

  //EMIT emite valores ny luego debo configurar al papá para que reciba este valor
  sendValue(): void {
    this.newEvent.emit(this.newItem);
    console.log(this.newItem, 'LÍNEAAAA56FORM');
  } // lo envio vacio.

  increase(product: GetProduct): void {
    product.qty += 1;
  }

  decrease(product: GetProduct): void {
    if (product.qty > 1) {
      product.qty -= 1;
    }
  }

  incrementOrderNumber(): void {
    let number = parseInt(this.numOrder, 10);
    number++;
    this.numOrder = number.toString().padStart(7, '0');
  }
  decrementOrderNumber(): void {
    let number = parseInt(this.numOrder, 10);
    number--;
    this.numOrder = number.toString().padStart(7, '0');
  }
  // se asigna el valor total en totalCost
  calculateTotalCost():number{
    // console.log(this.totalCost, 9000000000000000);
    this.totalCost = this.newItem.reduce((total, product) => total + (product.product.price * product.qty), 0);
    console.log(this.totalCost, 76666);
    return this.totalCost;
  }

  //falta lógica para recibir
  //falta: No hay un observable, que nos avise cuando una variable cambia... 
  // ngOnInit(): void {
  //   this.calculateTotalCost();
  //   // this.newItem.forEach(product => {
  //   //   this.totalCost += product.qty * product.product.price
  //   // });
  // }

  deselectProduct(product: any): void {
    let index = this.newItem.indexOf(product);
    if (index !== -1) {
      const removeProduct = this.newItem.splice(index, 1)[0];
      this.totalCost -= removeProduct.product.price * removeProduct.qty;
    }
  }

  onSubmitDoThis(): void {
    this.incrementOrderNumber()
    this.form.reset({
      numTable: 0,
    });
    this.sendValue();
    console.log('Nombre del Cliente:', this.form.value.clientsName, 'Número de orden:', this.numOrder, 'Núm de Mesa: ', this.form.value.numTable, 'Costo Total:', this.totalCost, 'Productos: ', this.newItem, 49999)
  }
  // ---------- quitar una seleción de producto
  cancelOrder(): void {
    this.form.reset({
      numTable: 0,
    });
    // this.numOrder
    this.newItem = [];
    this.totalCost = 0;
    this.sendValue();
  }
}
