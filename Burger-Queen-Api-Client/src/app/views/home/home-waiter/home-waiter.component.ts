import { Component, Output } from '@angular/core';
import { OrderService } from 'src/app/services/OrderService/order.service';
import { LoginModule } from '../../login/login.module';
// import { findIndex } from 'rxjs';

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
  selector: 'app-home-waiter',
  templateUrl: './home-waiter.component.html',
  styleUrls: ['./home-waiter.component.css'],
})
export class HomeWaiterComponent {
  // Casita de la data de la api 
  // id: any='';
  // client: string ='';
  // products: []= [];
  // status: string= '';
  // dateEntry: string= '';
  // dateProcessed: string = '';

  waiterName: string = 'Lady Diana';
  getProduct: GetProduct[] = [];
 

getData(product: Product) {
    const index = this.getProduct.findIndex(
      (item) => item.product.id === product.id
    );
    if (index === -1) {
      this.getProduct.push({
        qty: 1,
        product: product,
      });
    } else {
      this.getProduct[index].qty++;
    }
    console.log(this.getProduct, 'linea 40')}

clearOrderOnSubmit():void{
  this.getProduct = [];
}
getNewItem(value: any){
  this.getProduct = [];
  // debugger
console.log(value, 'getting value de newItem HWC 44'); //NO RECIBE
}




}
