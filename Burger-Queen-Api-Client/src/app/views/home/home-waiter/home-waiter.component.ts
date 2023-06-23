import { Component } from '@angular/core';
// import { findIndex } from 'rxjs';
// import { NgModel } from '@angular/forms';
// import { Router } from '@angular/router';
// import { AuthService } from 'src/app/services/Auth/auth.service';
// import { LoginService } from 'src/app/services/LoginService/login.service';

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
  };

@Component({
  selector: 'app-home-waiter',
  templateUrl: './home-waiter.component.html',
  styleUrls: ['./home-waiter.component.css'],
})
export class HomeWaiterComponent {
  // item: any[] = [];
  getProduct: GetProduct[] = [];
  getData(product: Product) {
    const index = this.getProduct.findIndex(item => item.product.id === product.id);
    if(index === -1) {
      this.getProduct.push({
          qty: 1,
          product: product
        });
    }else {
      this.getProduct[index].qty++;
    }
    console.log(this.getProduct, 'linea 40')
  };
}
  // getData(product: {}) {
    // if()
    // this.qty+= 1
    // declarar un arr con con dicionales decirle que haga push
    // this.item[i].qty
    // findIndex (busca el indice)
    // console.log(product, 'DATAAAA');
    // if (this.item === null) {
      // item.filter para saber si el producto esta
      // let newProduct = {
      //   qty: 1,
      //   product: product,
      // }
      // this.item.push(newProduct);
   
      //Agregar un nueva propiedad qty: inicializado en 1 por default
      // no debe estar maquetado en  html
      //debe coger la data del campo qty
      //antes de hacer push, buscar por id y verificar sí ya existe en this.item sí no existe lo pusheo y sí no agrego el qtyty+1

     
    // } else {
      // 'el producto ya existe en el carrito'
    // }

    // console.log(newProduct,'data con propiedad agregada');
  
  // item: any[] = [];

// sólo se puede usar en el html de esta clase
//   isModalVisible: boolean = false;
// selectedMenu: string = '';
//   counter: number = 1;
//   // waitersName: string = 'Luis Alvares';
//   clientsName: any = '';
//   numOrder: string = '0000001';
//   numTable: number = 0;
//   // *************
//   total: number= 0;
//   totalCost: number = 0;
//   // Un array de objetos
//   products: any[] = [
//     { name: 'Product 1', cost: 5},
//     { name: 'Product 2', cost: 7},
//     { name: 'Product 3', cost: 10},
//     { name: 'Product 4', cost: 7},

//     { name: 'Product 5', cost: 10},
//     { name: 'Product 6', cost: 15},
//     { name: 'Product 7', cost: 5},
//     { name: 'Product 8', cost: 5},

//     { name: 'Product 9', cost: 5},
//     { name: 'Product 10', cost: 5},
//     { name: 'Product 11', cost: 7},
//     { name: 'Product 12', cost: 7},
//     { name: 'Product 13', cost: 10},
//   ]
// // **************
// //miembros de la clase/ petición al backend...
// productosAgregados: any[] = [];

// constructor(private loginService: LoginService, private router: Router) { }

//   exchangeMenu(menu: string) {
//     this.selectedMenu = menu;
//     this.isModalVisible = true;
//   }

//   // onLogoutClick():void {
//   //   this.loginService.logout();
//   //   // this.router.navigate(['/login']);
//   // }

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

//   onSubmitDoThis(){
// console.log('hello');
//   }

//   agregar(){

//   };
//   // calculateTotalCost():void{
//     //total es el acumulador- elemento actual ->producto
//     //se asigna el valor total en totalCost
//   //   this.totalCost= this.products.reduce((total,product) => total + product.cost, 0);
//   // {{totalCost}}
//   // }
//   // ----------
//   agregarProducto(producto:any): void{
//     this.productosAgregados.push(producto);
//   }
// }
// interface Product{
//  name: string;
//  cost: number;
// }
