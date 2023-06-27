import { Component, Output } from '@angular/core';
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
  // @Output
  getProduct: GetProduct[] = [];
  //Entra acá
  getData(product: Product) {
    // debugger
    const index = this.getProduct.findIndex(
      (item) => item.product.id === product.id
    );
    if (index === -1) {
      this.getProduct.push({
        qty: 0,
        product: product,
      });
    } else {
      this.getProduct[index].qty++;
    }
    console.log(this.getProduct, 'linea 40');
  }

clearOrderOnSubmit():void{
  this.getProduct = [];
}
getNewItem(value: any){
  this.getProduct = [];
  // debugger
console.log(value, 'getting value de newItem HWC 44'); //NO RECIBE

}
// getNewItem: GetProduct[]=[];

}
//modificar en el padre.. porque recién ahí es como manda a su hijo
// getData(product: {}) {
// this.item[i].qty
// this.item.push(newProduct);
//Agregar un nueva propiedad qty: inicializado en 1 por default
// no debe estar maquetado en  html
//debe coger la data del campo qty
//antes de hacer push, buscar por id y verificar sí ya existe en this.item sí no existe lo pusheo y sí no agrego el qtyty+1

// sólo se puede usar en el html de esta clase
//   isModalVisible: boolean = false;
//   selectedMenu: string = '';
//   counter: number = 1;
//   // waitersName: string = 'Luis Alvares';
//   clientsName: any = '';
//   numOrder: string = '0000001';
//   numTable: number = 0;
//   // *************
//   total: number= 0;
//   totalCost: number = 0;

// onLogoutClick():void {
//   this.loginService.logout();
// this.router.navigate(['/login']);
// }
//   increase(){
//     this.counter++;
//   }
//   decrease(){
//     if(this.counter > 0){
//       this.counter--;
//     }
//   }
//   incrementOrderNumber():void{
//     let number = parseInt(this.numOrder);
//     number++;
//     this.numOrder = number.toString().padStart(7, '0');
//   }
// calculateTotalCost():void{
//total es el acumulador- elemento actual ->producto
//se asigna el valor total en totalCost
//   this.totalCost= this.products.reduce((total,product) => total + product.cost, 0);
// {{totalCost}}
// }
