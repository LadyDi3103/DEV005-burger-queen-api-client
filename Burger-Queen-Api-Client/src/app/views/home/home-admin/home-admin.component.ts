import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/AdminService/admin.service';
import { FormControl, FormGroup } from '@angular/forms';
import { DataUser, DataProduct, DataUserEdit, DataProductEdit } from 'src/app/interfaces/interfaces';
import { MatDialog } from '@angular/material/dialog';
import { DeleteUserModalComponent } from './delete-user-modal/delete-user-modal.component';
// import { EditProductModalComponent } from './edit-product-modal/edit-product-modal.component';
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
  public APIDATA: any = '';
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
  });

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
        price: 4.00,
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
  constructor(private adminService: AdminService, private router: Router, private dialog: MatDialog) { }
  onSubmit(): void {
    const userData: DataUser = {
      email: this.form.value.email || '',
      password: this.form.value.password || '',
      role: this.form.value.role || '',
    }
    this.adminService.createUser(userData).subscribe(
      (resp) => {
        console.log(resp, 'VALIDA');
        this.form.reset();
      },
    )
  }
// ME FALTA ACTUALIZAR IMPLEMENTAR LÓGICA PARA HACER QUE ACTUALICE LA DATA MODIFICADA
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

  getProducts(): void {
    this.adminService.getListProducts().subscribe((resp) => {
      console.log(resp);
      this.APIDATA = resp;
      // En caso de querer entrar APIDATA debemos indicar el índice correspondiente []
    });
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    this.getProducts();
    this.getListUsers();
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
        this.form.reset();
      }
    )
  }
  showInfoModalEditProduct(product: DataProduct) {
    console.log(product, 'PRODUCT');

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
    this.adminService.editProduct(this.APIDATA.id).subscribe(
      (resp) => {
        console.log(' LINEAAAA 223 Producto actualizado:', resp);
        this.APIPRODUCT = resp;
      },
      (err) => {
        console.error('Error al editar el producto:', err);
      });
    }
  getListUsers(): void {
    this.adminService.getAllUsers().subscribe((resp) => {
      console.log(resp, 'RESP-GET-ALL-USERS');
      this.users = resp;
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
  // openModalEditProduct(): void {
  //   this.showModalEditProduct = true;
  // }
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
        this.delete(id); // Llamar a la función para eliminar al usuario
        console.log('ELIMINAR  257');
        //OBTENER EL ID DEL USUARIO  QUE LE DAMOS CLICK
      }
    });
  }
  delete(id:number):void{
    this.adminService.deleteUser(id).subscribe((resp) =>{
      console.log(resp, 'RESP DELETE');
    })
  }

  logout(): void {
    this.router.navigateByUrl('/login');
  }
}


// *For File*
  // const image: File | null = this.form.value.image instanceof File ? this.form.value.image : null;
  // const image: File | null =
  //   this.form.value.image instanceof File &&
  //   this.isImageFile(this.form.value.image)
  //     ? this.form.value.image
  //     : null;

  // *Otro onInit*
//no toma los valores
// ngOnInit(): void {
//   console.log('ENTRÓ AL ngOnInit');
//   this.obtainListUsers()
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
//   this.obtainListProducts()
//     console.log('sigue en el ngOnInit');
// }
// *Condiciones si es una imagen*
// isImageFile(file: File): boolean {
//   const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
//   const fileExtension = file.name
//     .substring(file.name.lastIndexOf('.'))
//     .toLowerCase();
//   return allowedExtensions.includes(fileExtension);
// }
// *Otro Para Obtener list de productos
 // obtainListProducts(): void {
  //   this.adminService.getListProducts().subscribe((data) => {
  //     console.log(data, 'DATA 388888');
  //   })
  // }

// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private token: string | null = null;

//   constructor(private http: HttpClient) { }

//   admin(email: string, password: string, role: string): Observable<any> {
//     const credentials = {
//       email,
//       password,
//       role
//     };

//     const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

//     return this.http.post<any>('http://localhost:8080/users', credentials, { headers });
//   }

//   setToken(token: string): void {
//     this.token = token;
//   }

//   getToken(): string | null {
//     return this.token;
//   }

//   isAuthenticated(): boolean {
//     return !!this.token;
//   }
// }
// ---------
// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthService } from 'src/app/services/Auth/auth.service';


// @Component({
//   selector: 'app-home-admin',
//   templateUrl: './home-admin.component.html',
//   styleUrls: ['./home-admin.component.css']
// })
// export class HomeAdminComponent implements OnInit {
//   showModal = false;
//   Email: string = "";
//   password: string = "";
//   rol: string = "";
//   users: any[] = [];

//   constructor(private authService: AuthService, private adminService: AdminService, private router: Router) { }
//   ngOnInit(): void {
//     //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
//     //Add 'implements OnInit' to the class.