import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AdminService } from 'src/app/services/AdminService/admin.service';

interface Menu {
  drinks: Product[],
  brunch: Product[],
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
export class MenuHomeWaiterComponent {
  isModalVisible: boolean = false;
  public APIDATA: any = '';
  @Output() propagate = new EventEmitter<any>();

  constructor(private adminService: AdminService) { }
  getProducts(): void {
    this.adminService.getListProducts().subscribe((resp) => {
      console.log(resp);
      this.APIDATA = resp;
    },
    )
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    this.getProducts();

  }
  showTabContent(option: string): void {
    this.selectedMenu = option;
  }
  sendData() {
    this.propagate.emit(this.selectedProduct);
  
  }
  selectedMenu: string = 'option1';
  selectedTab: number = 1;
  selectedProduct: Product | null = null; // Product representa el tipo de datos de tus productos
  selectedProducts: Product[] = []; // Product representa el tipo de datos de tus productos
  totalCost: number = 0;
  qty: number = 0;
  
  // ENVIAR ESTA DATA 
  selectProduct(product: Product): void {
    this.selectedProduct = product; //seteado
    this.sendData();
    this.totalCost += product.price;
  }
}




