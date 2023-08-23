import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/AdminService/admin.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { DataUser, DataProduct, DataUserEdit, DataProductEdit } from 'src/app/interfaces/interfaces';
import { MatDialog } from '@angular/material/dialog';
import { DeleteUserModalComponent } from './delete-user-modal/delete-user-modal.component';
import { DeleteProductModalComponent } from './delete-product-modal/delete-product-modal.component';
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
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent {
  adminName: string = 'LadyDiana';
  errorMessage: string = '';
  selectedMenu: string = 'option1';
  selectedProduct: Product | null = null; // Product representa el tipo de datos de tus productos
  showModal: boolean = false;
  showModalProduct: boolean = false;
  showModalEdit: boolean = false;
  showModalEditProduct: boolean = false;
  public APIDATAPRODUCT: any = '';
  public RESP: any = '';
  public APIPRODUCT: any = '';
  public oneUser: any;
  public oneProduct: any;
  users: any[] = [];
  filteredUsers: any[] = [];
  adminUsers: any[] = [];
  chefUsers: any[] = [];
  waiterUsers: any[] = [];
  selectedRole: string = ''; 

  // F O R M  R E A C T I V O
  //form: todos los input que recolectan la Data
  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    role: new FormControl(''),
    name: new FormControl(''),
    price: new FormControl(),
    image: new FormControl(''),
    type: new FormControl(''),
    selected: new FormControl(''),
  });
  constructor(private adminService: AdminService, private router: Router, private dialog: MatDialog, private formBuilder: FormBuilder ) { }
  onSubmit(): void {
    const userData: DataUser = {
      email: this.form.value.email || '',
      password: this.form.value.password || '',
      role: this.form.value.role || '',
    }
    this.adminService.createUser(userData).subscribe(
      (resp) => {
        console.log(resp, 'VALIDA');
        this.getListUsers();
      },
      )
    }
    getListUsers(): void {
      this.adminService.getAllUsers().subscribe((resp) => {
        this.filterUsersByRole();
      })
    }
    filterUsersByRole() {
      this.adminUsers = this.users.filter(user => user.role === 'admin');
      this.chefUsers = this.users.filter(user => user.role === 'chef');
      this.waiterUsers = this.users.filter(user => user.role === 'waiter');
    
      this.filteredUsers = this.users.filter(user => {
        return user.role === this.selectedRole || this.selectedRole === '';
      });
    }
  showInfoModalEdit(user: DataUser) {
    this.form.patchValue({
      email: user.email,
      role: user.role,
      password: user.password
    });
    this.oneUser = user;
    this.showModalEdit = true;
  }
  updateData(id:number){
      for (let i = 0; i < this.users.length; i++) {
        if(this.users[i].id  === id){
          this.users[i] = this.RESP;
        }    
      }
    }
  editDataUser(): void {
    const userData: DataUserEdit = {
      email: this.form.value.email || '',
      password: this.form.value.password || '',
      role: this.form.value.role || '',
      id: this.oneUser.id
    }
    // obtengo la data del usuario editado
    this.adminService.editUser(userData).subscribe((resp) =>{
      console.log(resp, 'RESP EDITTT');
      this.RESP = resp;
      this.showModalEdit = false;
      
      this.updateData(this.RESP.id)
      // actualizar en users - el nuevo valor del usuario
      this.filterUsersByRole()
    },
    (err) => {
      this.showModalEdit = false;
    })
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    this.getProducts();
    this.getListUsers();
    // this.initializeForm();
  }
  // P R O D U C T S
  getProducts(): void {
    this.adminService.getListProducts().subscribe((resp) => {
      console.log(resp);
      this.APIDATAPRODUCT = resp;
      // En caso de querer entrar APIDATAPRODUCTPRODUCT debemos indicar el índice correspondiente []
    });
  }

  createProducts(): void {
    const userProduct: DataProduct = {
      name: this.form.value.name || '',
      price: this.form.value.price || 0,
      image: this.form.value.image || '',
      type: this.form.value.type || '',
    };
    this.adminService.createProduct(userProduct).subscribe(
      (resp) => {
        console.log(resp, 'VALIDA');
        this.getProducts();
        this.form.reset();
      }
    )
  }
  showInfoModalEditProduct(product: DataProduct) {
    console.log(product, 'PRODUCT');
// Hay que separar el mostrar los valores del botón del producto
// Estamos dentro del llamado Patch..Nunca se llama el delete, tanto para el edit y el delete
// Hay que separar lógica de los botones, del botón product del producto hay que decirle que sólo muestre el modal
// dentro del modal, hay que darle la función al botón edit para que muestre los valores del producto y que llame al patch
// y dentro del modal hay que darle la función al botón delete para que llame al dialog(modal) del delete y haga la fn del delete.


this.form.patchValue({
      name: product.name,
      price: product.price,
      image: product.image,
      type: product.type,
    });

    this.oneProduct = product;
    console.log(this.oneProduct, 'ONEproduct');
    
    this.showModalEditProduct = true;
  }

  editinProduct(): void {
    const productData: DataProductEdit = {
      name: this.form.value.name || '',
      price: this.form.value.price || '',
      image: this.form.value.image || '',
      type: this.form.value.type || '' ,
      id: this.oneProduct.id,  
      }
    this.adminService.editProduct(productData).subscribe(
      (resp) => {
        console.log(' LINEAAAA 223 Producto actualizado:', resp);
        this.APIPRODUCT = resp;
        this.showModalEditProduct = false;
        this.updateProduct(this.APIPRODUCT.id)
      },
      (err) => {
        this.showModalEditProduct = false;
      });
    }
    updateProduct(id:number){
      for (let i = 0; i < this.APIDATAPRODUCT.length; i++) {
        if(this.APIDATAPRODUCT[i].id  === id){
          this.APIDATAPRODUCT[i] = this.APIPRODUCT;
        }    
      }
    }
   //  T A G S  &  M O D A L S
  showTabContent(option: string): void {
    this.selectedMenu = option;
  }
  selectProduct(product: Product): void {
    this.selectedProduct = product;
  }
  openModalRegisterEmployee() {
    this.showModal = true;
  }
  openModalCreateProduct() {
    this.showModalProduct = true;
  }
  openModalEditUser() {
    this.showModalEdit = true;
  }
  closeModal() {
    this.showModal = false;
    this.showModalProduct = false;
    this.showModalEdit = false;
    this.showModalEditProduct = false;
    this.form.reset();
  }
  openDeleteUserModal(id: number):void {
    const dialogRef = this.dialog.open(DeleteUserModalComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.deleteUsr(id); // FN para eliminar al usuario
        console.log('ELIMINAR  257');
        this.getListUsers();                // FN para refrescarOBTENER EL ID DEL USUARIO  QUE LE DAMOS CLICK
      }
    });
  }
  deleteUsr(id:number):void{
    this.adminService.deleteUser(id).subscribe((resp) =>{
      console.log(resp, 'RESP DELETE');
    })
  }
  // updateDataDelete(id:number){
  //   for (let i = 0; i < this.users.length; i++) {
  //     if(this.users[i].id  === id){
  //       this.users[i] = this.RESP;
  //     }    
  //   }
  // }
  openDeleteProductModal(id: number):void {
    const dialogRefProduct = this.dialog.open(DeleteProductModalComponent);
  
    dialogRefProduct.afterClosed().subscribe(result => {
      if (result === true) {
        this.deleteProduct(id); // Llamar a la función para eliminar al usuario
        console.log('ELIMINAR  257');
        this.getProducts();                                //OBTENER EL ID DEL USUARIO  QUE LE DAMOS CLICK
      }
    });
  }
  deleteProduct(id:number):void{
    this.adminService.deleteProduct(id).subscribe((resp) =>{
      console.log(resp, 'RESP DELETE');
     
    })
  }
  logout(): void {
    this.router.navigateByUrl('/login');
  }
}
