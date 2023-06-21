import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
// import { products } from '../products/produts'; //importo el array de productos
interface Menu {
  breakfast: Product[],
  meals: Product[],
}
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  type: string;
}

@Component({
  selector: 'app-menu-home-waiter',
  templateUrl: './menu-home-waiter.component.html',
  styleUrls: ['./menu-home-waiter.component.css']
})
export class MenuHomeWaiterComponent{
  // isModalVisible: boolean = false;

  
    showTabContent(option: string): void {
      this.selectedMenu = option;
    }
  
    menuItem: Menu = {
    breakfast: [
      {
        id: 1, 
        name: 'Short Coffe', 
        price: 2.000, 
        image: "../../../../../../../assets/img/cafe_red.png", 
        type: 'breakfast'
      },
      {
        id: 2, 
        name: 'Double Coffe', 
        price: 2.800, 
        image: "../../../../../../../assets/img/cafe_red.png", 
        type: 'breakfast'
      },
      {
        id: 3, 
        name: 'Water', 
        price: 1.500, 
        image: "../../../../../../../assets/img/Breakfast_water_red.png", 
        type: 'breakfast'
      },
      {
        id: 4,
        name: 'Juice', 
        price: 3.500, 
        image: "../../../../../../../assets/img/Breakfast_juice_red.png", 
        type: 'breakfast'
      },
    ],
      meals: [
        {
          id: 5, 
          name: 'Croissant', 
          price: 2.000, 
          image: "../../../../../../../assets/img/croissant_red.png", 
          type: 'breakfast'
        },
        {
          id: 6, 
          name: 'Slice Bread', 
          price: 1.500, 
          image: "../../../../../../../assets/img/slice_red.png", 
          type: 'breakfast'
        },
        {
          id: 7, 
          name: 'Sandwich', 
          price: 6.800, 
          image: "../../../../../../../assets/img/sandwich_red.png", 
          type: 'breakfast'
        },
        {
          id: 8, 
          name: 'Pancakes', 
          price: 6.800, 
          image: "../../../../../../../assets/img/panqueques_red.png", 
          type: 'breakfast'
        },
      ],
    }
    
    @Output() propagate = new EventEmitter<any>();
  
    sendData(){
      this.propagate.emit(this.selectedProduct);
      console.log('sendData ENVIANDO');
      
    }

  selectedMenu: string = 'option1';
  selectedTab: number = 1;
  selectedProduct: Product | null = null; // Product representa el tipo de datos de tus productos
  selectedProducts: Product[] = []; // Product representa el tipo de datos de tus productos
  totalCost: number = 0;
  // productList = products; //me traigo el array de prod que importé
// ENVIAR ESTA DATA 
  selectProduct(product: Product): void {
    this.selectedProduct = product; //seteado
    this.sendData();
    this.totalCost += product.price;
    // console.log(this.selectProduct);
    console.log(this.totalCost, 33);
    // console.log(this.selectProduct(product: Product));
  }
  addProduct(): void {
    if (this.selectedProduct) {
      this.selectedProducts.push(this.selectedProduct);
      this.totalCost += this.selectedProduct.price;
      this.selectedProduct = null;
      console.log(this.selectedProduct );
      
    }
  }

  // deleteSelection(product: Product): void {
  //   const index = this.selectedProducts.indexOf(product);
  //   if (index !== -1) {
  //     this.selectedProducts.splice(index, 1);
  //     this.totalCost -= product.price;
  //     console.log(product.price);
      
  //   }
  // }


  // menu: Menu = {
  //   breakfast: [
  //     {
  //       id: 1, name: 'Short Coffe', price: 2000, image:"../../../../../../../assets/img/cafe_red.png", type: 'breakfast'
  //     },
  //     {
  //       id: 2, name: 'Double Coffe', price: 2.800, image:"../../../../../../../assets/img/cafe_red.png", type: 'breakfast'
  //     },
  //     {
  //       id: 3, name: 'Water', price: 1.500, image:"../../../../../../../assets/img/Breakfast_water_red.png", type: 'breakfast'
  //     },
  //     {
  //       id: 4, name: 'Juice', price: 3.500, image:"../../../../../../../assets/img/Breakfast_juice_red.png", type: 'breakfast'
  //     },
  //   ],
  //   meals:[
  //   {
  //     id: 5, name: 'Croissant', price: 2.000, image:"../../../../../../../assets/img/croissant_red.png", type: 'breakfast'
  //   },
  //   {
  //     id: 6, name: 'Slice Bread', price: 1.500, image:"../../../../../../../assets/img/slice_red.png", type: 'breakfast'
  //   },
  //   {
  //     id: 7, name: 'Sandwich', price: 6.800, image:"../../../../../../../assets/img/sandwich_red.png", type: 'breakfast'
  //   },
  //   {
  //     id: 8, name: 'Pancakes', price: 6.800, image:"../../../../../../../assets/img/panqueques_red.png", type: 'breakfast'
  //   },
  // ]
  // } 
}
