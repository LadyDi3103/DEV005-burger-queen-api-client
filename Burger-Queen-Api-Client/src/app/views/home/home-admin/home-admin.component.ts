import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/AdminService/admin.service';
import { FormControl, FormGroup } from '@angular/forms';
import { DataUser, DataProduct } from 'src/app/interfaces/interfaces';
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
  // email: string = '';
  // password: string = '';
  // rol: string = '';
  errorMessage: string = '';
  selectedMenu: string = 'option1';
  selectedProduct: Product | null = null; // Product representa el tipo de datos de tus productos
  showModal: boolean = false;
  showModalProduct: boolean = false;
  // F O R M  R E A C T I V O
  //form va toda la data que se ingresa en un input
  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rol: new FormControl(''),
    name: new FormControl(''),
    price: new FormControl(0),
    image: new FormControl(''),
    type: new FormControl(''),
  });
  // registrationForm: FormGroup;
  // showModal: boolean = false;
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
  constructor(private adminService: AdminService, private router: Router) { }
onSubmit(): void {
  const userData:DataUser={
    email: this.form.value.email || '',
    password: this.form.value.password || '',
    rol: this.form.value.rol || '',
  }
  this.adminService.getAccessToken(userData).subscribe(
    (resp) => {
      console.log(resp, 'VALIDA');
      this.form.reset()
      // if(resp.accessToken){
      //   this.router.navigate(['/home-admin']);
      //   this.email= ' ';
      //   this.password= ' ';
      // }else if(resp.accessToken === undefined){
      //   this.errorMessage = 'Wrong Credentials!!!'
      // }

    },
    //  error: ()=>{
    //   this.errorMessage = 'Wrong Credentials!!!';
    //  }
  )
}
createProducts(): void {
  // const image: File | null = this.form.value.image instanceof File ? this.form.value.image : null;
  // const image: File | null =
  //   this.form.value.image instanceof File &&
  //   this.isImageFile(this.form.value.image)
  //     ? this.form.value.image
  //     : null;
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
//no toma los valores
ngOnInit(): void {
  console.log('ENTRÓ AL ngOnInit');
  this.obtainListUsers()
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.obtainListProducts()
    console.log('sigue en el ngOnInit');
}
isImageFile(file: File): boolean {
  const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
  const fileExtension = file.name
    .substring(file.name.lastIndexOf('.'))
    .toLowerCase();
  return allowedExtensions.includes(fileExtension);
}
obtainListProducts(): void {
  this.adminService.getListProducts().subscribe((data) => {
    console.log(data, 'DATA 388888');
  })
}
obtainListUsers():void{
  this.adminService.getAllUsers().subscribe((resp)=>{
    console.log(resp, 'RESP-GET-ALL-USERS');
  })
}
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
closeModal() {
  this.showModal = false;
  this.form.reset();
}
logout(): void {
  this.router.navigateByUrl('/login');
}
}
//TENER EN CUENTA LA DATA HARDCODEADA...
// LAMO AL SERVICIO Y A LA FUNCIÓN Y GUARDO MI RESPUESTA EN EL ARRAY DE PRODUCTOS...
// COPIAR LO DEL LOGIN-PAGE.COMPONENT.TS PARA HACER EL RUTEO RESPECTIVO A HOME-ADMIN
// Y MANEJO DE ERROR




















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

//   }
//   openModal() {
//     this.showModal = true;
//   }

//   closeModal() {
//     this.showModal = false;
//     // this.form.reset();
//   }
//   logout(): void {
//     // Redirige al usuario a la página de inicio de sesión
//     this.router.navigateByUrl('/login');
//   }
// }
