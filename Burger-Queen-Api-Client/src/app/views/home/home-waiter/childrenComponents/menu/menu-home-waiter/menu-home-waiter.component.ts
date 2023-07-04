import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { AdminService } from 'src/app/services/AdminService/admin.service';

interface Menu {
  drinks: Product[],
  brunch: Product[],
}
interface Product {id: number;
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
  isModalVisible: boolean = false;
  public APIDATA : any = '';
  @Output() propagate = new EventEmitter<any>();

  constructor(private adminService: AdminService){ }
  getProducts(): void{
    this.adminService.getListProducts().subscribe((resp)=>{
      console.log(resp);
      this.APIDATA = resp;
      console.log(this.APIDATA, 'apidataaaaaaaa');
      
    },
    )
  }
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.getProducts();

}
    showTabContent(option: string): void {
      this.selectedMenu = option;
    }
  
    menuItem: Menu = {
      drinks: [
      {
        id: 1, 
        name: 'Short Coffe', 
        price: 2.00, 
        image: "../../../../../../../assets/img/icons8-vaso-100.png", 
        type: 'breakfast'
      },
      {
        id: 2, 
        name: 'Double Coffe', 
        price: 3.00, 
        image: "../../../../../../../assets/img/icons8-vaso-100.png", 
        type: 'breakfast'
      },
      {
        id: 3, 
        name: 'Water', 
        price: 1.00, 
        image: "../../../../../../../assets/img/icons8-plástico-100.png", 
        type: 'breakfast'
      },
      {
        id: 4,
        name: 'Juice', 
        price: 3.00, 
        image: "../../../../../../../assets/img/icons8-jugo-64.png", 
        type: 'breakfast'
      },
    ],
      brunch: [
        {
          id: 5, 
          name: 'Croissant', 
          price: 2.00, 
          image: "../../../../../../../assets/img/icons8-cruasán-100.png", 
          type: 'breakfast'
        },
        {
          id: 6, 
          name: 'Slice Bread', 
          price: 1.00, 
          image: "../../../../../../../assets/img/icons8-pan-100.png", 
          type: 'breakfast'
        },
        {
          id: 7, 
          name: 'Sandwich', 
          price: 6.00, 
          image: "../../../../../../../assets/img/icons8-sándwich-100.png", 
          type: 'breakfast'
        },
        {
          id: 8, 
          name: 'Pancakes', 
          price: 6.00, 
          image: "../../../../../../../assets/img/icons8-panqueques-64.png", 
          type: 'breakfast'
        },
      ],
    }
    
    sendData(){
      this.propagate.emit(this.selectedProduct);
      // console.log('sendData ENVIANDO'); 
    }
    selectedMenu: string = 'option1';
    selectedTab: number = 1;
    selectedProduct: Product | null = null; // Product representa el tipo de datos de tus productos
    selectedProducts: Product[] = []; // Product representa el tipo de datos de tus productos
    totalCost: number = 0;
    qty: number = 0;
    // increaseQtyty(value:number){
    //   this.qtyty += value;
    // }
  // productList = products; //me traigo el array de prod que importé
// ENVIAR ESTA DATA 
  selectProduct(product: Product): void {
    this.selectedProduct = product; //seteado
    // this.qty+= 1;
    // this.selectProduct.qty = 1;
    // console.log(this.selectedProduct, 'LÍNEA 109');
    // this.selectProduct.Selected.qty
    this.sendData();
    this.totalCost += product.price;
    // console.log(this.selectProduct);
    console.log(this.totalCost,this.qty, 33);
    // console.log(this.selectProduct(product: Product));
  } 
  }
  // }



