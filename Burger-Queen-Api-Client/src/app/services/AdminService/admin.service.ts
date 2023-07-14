import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataUser, DataProduct, DataUserEdit } from 'src/app/interfaces/interfaces';
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
    return this.http.get('http://localhost:8080/users', { headers });
  }
  getOneUser(id: number): Observable<any> {
    return this.http.get(`http://localhost:8080/users/${id}`);
  }
  //Con esta función crea a los usuarios
  createUser(userData: DataUser): Observable<any> {
    const user = {
      email: userData.email, // traer el valor de los imputs
      password: userData.password, // traer la información de ambos
      rol: userData.role,
    };
    return this.http.post('http://localhost:8080/users', user);
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
    return this.http.patch(`http://localhost:8080/users/${userData.id}`, userData, {headers});
  }
  //obtener los valor que escribimos en el modal
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/users/${id}`);
  }



  getListProducts(): Observable<any> {
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
    })
    return this.http.get('http://localhost:8080/products', { headers });
  }
  createProduct(userProduct: DataProduct): Observable<any> {
    const products = {
      name: userProduct.name, // traer el valor de los inputs
      price: userProduct.price,
      image: userProduct.image,
      type: userProduct.type,
    };
    return this.http.post('http://localhost:8080/products', products);
  }
}
