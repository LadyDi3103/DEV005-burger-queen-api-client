import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataUser, DataProduct, DataUserEdit, DataProductEdit } from 'src/app/interfaces/interfaces';
@Injectable({
  providedIn: 'root'
})

export class AdminService {
  // private URL = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
    })
    return this.http.get('https://api-mock-laboratoria.onrender.com/users', { headers });
  }
  getOneUser(id: number): Observable<any> {
    return this.http.get(`https://api-mock-laboratoria.onrender.com/users/${id}`);
  }
  //Con esta función crea a los usuarios
  createUser(userData: DataUser): Observable<any> {
    const user = {
      email: userData.email, // traer el valor de los imputs
      password: userData.password, // traer la información de ambos
      role: userData.role,
    };
    return this.http.post('https://api-mock-laboratoria.onrender.com/users', user);
  }
  editUser(userData: DataUserEdit ): Observable<any> {
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
    })
    // const user = {
    //   id: id,
    //   email: email, // traer el valor de los imputs
    //   password:password, // traer la información de ambos
    //   rol:rol,
    // };
    return this.http.patch(`https://api-mock-laboratoria.onrender.com/users/${userData.id}`, userData, {headers});
  }
  //obtener los valor que escribimos en el modal
  deleteUser(id: number): Observable<any> {
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
    })
    return this.http.delete(`https://api-mock-laboratoria.onrender.com/users/${id}`, {headers});
  }

  // P R O D U C T S  S E R V I C E S
  getListProducts(): Observable<any> {
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
    })
    return this.http.get('https://api-mock-laboratoria.onrender.com/products', { headers });
  }
  createProduct(userProduct: DataProduct): Observable<any> {
    const products = {
      name: userProduct.name, // traer el valor de los inputs
      price: userProduct.price,
      image: userProduct.image,
      type: userProduct.type,
    };
    return this.http.post('https://api-mock-laboratoria.onrender.com/products', products);
  }
  editProduct(userProduct: DataProductEdit ): Observable<any> {
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
    })
    return this.http.patch(`https://api-mock-laboratoria.onrender.com/products/${userProduct.id}`, userProduct, {headers});
  }
  deleteProduct(id: number): Observable<any> {
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
    })
    return this.http.delete(`https://api-mock-laboratoria.onrender.com/products/${id}`, {headers});
  }

}
