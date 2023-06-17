import { Component } from '@angular/core';
// import { products } from '../products/produts'; //importo el array de productos

interface Product {
  id: number;
  name: string;
  price: number;
  type: string;
}

@Component({
  selector: 'app-menu-home-waiter',
  templateUrl: './menu-home-waiter.component.html',
  styleUrls: ['./menu-home-waiter.component.css']
})
export class MenuHomeWaiterComponent {
isModalVisible: boolean = false;
selectedMenu: string = '';
selectedTab: number = 1;
selectedProduct: Product | null = null; // Product representa el tipo de datos de tus productos
selectedProducts: Product[]=[]; // Product representa el tipo de datos de tus productos
totalCost: number = 0;
// productList = products; //me traigo el array de prod que importé
constructor(){
  console.log(this.totalCost,this.selectedProduct, this.selectedProducts,255555);
}


selectProduct(product: Product):void{
  this.selectedProduct= product;
  // this.totalCost += product.cost;
}
addProduct():void{
  if(this.selectedProduct){
    this.selectedProducts.push(this.selectedProduct);
    this.totalCost += this.selectedProduct.price;
    this.selectedProduct = null;
  }
}

deleteSelection(product:Product):void{
const index = this.selectedProducts.indexOf(product);
if(index !== -1){
  this.selectedProducts.splice(index,1);
  this.totalCost -= product.price;
}
}

showTabContent(option: string):void{
this.selectedMenu = option;
}


products: Product[] = [
    { id: 1, name: 'Croissant', price: 2.000, type: 'breakfast'
    },
    { id: 2, name: 'Slice Bread', price: 1.500, type: 'breakfast'
    },
    { id: 3, name: 'Sandwich', price: 6.800, type: 'breakfast'
    },
    { id: 4, name: 'Pancakes', price: 6.800, type: 'breakfast'
    },
    { id: 5, name: 'Short Coffe', price: 2000, type: 'breakfast'
    },
    { id: 6, name: 'Double Coffe', price: 2.800, type: 'breakfast'
    },
    { id: 7, name: 'Water', price: 1.500, type: 'breakfast'
    },
    { id: 8, name: 'Juice', price: 3.500, type: 'breakfast'
    },    
]
}
