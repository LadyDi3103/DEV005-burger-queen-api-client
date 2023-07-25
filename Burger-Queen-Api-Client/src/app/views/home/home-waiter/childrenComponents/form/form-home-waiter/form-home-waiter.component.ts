import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataOrder } from 'src/app/interfaces/interfaces';
import { OrderService } from 'src/app/services/OrderService/order.service';

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
  //form va toda la data que se ingresa en un input
  form = new FormGroup({
    clientsName: new FormControl(''),
    numTable: new FormControl(0),
    total: new FormControl(''),
    totalCost: new FormControl(''),
  });
  constructor(private orderService: OrderService) { }
  timeDataEntry = new Date();
  formattedDataEntry = this.timeDataEntry.toLocaleString('es-ES')

  padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
  }

  formatDate(date: Date) {
    return (
      [
        date.getFullYear(),
        this.padTo2Digits(date.getMonth() + 1),
        this.padTo2Digits(date.getDate()),
      ].join('-') +
      ' ' +
      [
        this.padTo2Digits(date.getHours()),
        this.padTo2Digits(date.getMinutes()),
        this.padTo2Digits(date.getSeconds()),
      ].join(':')
    );
  }
  onSubmit(): void {
    const date = this.formatDate(new Date());
    const orderData: DataOrder =
    {
      client: this.form.value.clientsName || '', 
      products: this.newItem as [], // castear
      status: 'pending',
      dataEntry: date,
    };
    //Aquí hago un request a la api
    this.orderService.createOrder(orderData).subscribe({
      next: (resp) => {
        this.incrementOrderNumber()
        this.form.reset({
          numTable: 0,
        });
      },
      error: (error) => {
        console.log(error, 'MANEJOR ERROR ORDER');
      }
    })
    this.sendValue();
  }

  sendValue(): void {
    this.newEvent.emit(this.newItem);
  } // lo envio vacio

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
  calculateTotalCost(): number {
    this.totalCost = this.newItem.reduce((total, product) => total + (product.product.price * product.qty), 0);
    return this.totalCost;
  }
  deselectProduct(product: any): void {
    let index = this.newItem.indexOf(product);
    if (index !== -1) {
      const removeProduct = this.newItem.splice(index, 1)[0];
      this.totalCost -= removeProduct.product.price * removeProduct.qty;
    }
  }

  cancelOrder(): void {
    this.form.reset({
      numTable: 0,
    });
    this.newItem = [];
    this.totalCost = 0;
    this.sendValue();
  }
}
