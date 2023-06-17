import { Component } from '@angular/core';

@Component({
  selector: 'app-form-home-waiter',
  templateUrl: './form-home-waiter.component.html',
  styleUrls: ['./form-home-waiter.component.css']
})
export class FormHomeWaiterComponent {
    isModalVisible: boolean = false;
    selectedMenu: string = '';
    counter: number = 1;
    // waitersName: string = 'Luis Alvares';
    clientsName: any = '';
    numOrder: string = '0000001';
    numTable: number = 0;
    // *************
    total: number= 0;
    totalCost: number = 0;
    // Un array de objetos
    products: any[] = [
      { name: 'Product 1', cost: 5},
      { name: 'Product 2', cost: 7},
      { name: 'Product 3', cost: 10},
      { name: 'Product 4', cost: 7},
  
      { name: 'Product 5', cost: 10},
      { name: 'Product 6', cost: 15},
      { name: 'Product 7', cost: 5},
      { name: 'Product 8', cost: 5},
  
      { name: 'Product 9', cost: 5},
      { name: 'Product 10', cost: 5},
      { name: 'Product 11', cost: 7},
      { name: 'Product 12', cost: 7},
      { name: 'Product 13', cost: 10},
    ]
  // **************
  //miembros de la clase/ petición al backend...
  productosAgregados: any[] = [];
 

  // onLogoutClick():void {
  //   this.loginService.logout();
  //   // this.router.navigate(['/login']);
  // }
  
  increase(){
    this.counter++;
  }
  
  decrease(){
    if(this.counter > 0){
      this.counter--;
    }
  }
  
  incrementOrderNumber():void{
    let number = parseInt(this.numOrder);
    number++;
    this.numOrder = number.toString().padStart(7, '0');
  }

  onSubmitDoThis(){
console.log('hello');
  }

 
  // calculateTotalCost():void{
    //total es el acumulador- elemento actual ->producto
    //se asigna el valor total en totalCost
  //   this.totalCost= this.products.reduce((total,product) => total + product.cost, 0);
  // {{totalCost}}
  // }
  // ----------
  agregarProducto(producto:any): void{
    this.productosAgregados.push(producto);
  }
}
