import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  constructor(private http: HttpClient) { }
  getAccessToken(email: string, password: string, rol: string): Observable<any> { 
    return this.http.post('http://localhost:8080/users', {
    email: email, // traer el valor de los imputs
    password: password, // traer la información de ambos
    rol: rol,
    }
    )
  }
  createProduct(name: string, price:number, image: string, type:string): Observable<any> {
    return this.http.post('http://localhost:8080/users/products', {
      name: name,
      price: price,
      image: image,
      type: type,
    })
  }
  //CREAR EL PRODUCT LO HACE EL ADMIN/    
  // HACER PETICIÓN PETICIÓN POST..
  // MANDO BODY MI OBJETO CON TODA LA DATA PARA CREAR UNA ORDEN
  // ES NECESARIO.. CONECTAR A LA BASE DE DATOS!!!
  // getListProducts(id: number, name: string, price:number, image: string, type:string, dateEntry:string): Observable<any> {
  //   return this.http.post('http://localhost:8080/users/products', {
  //     id:id
      // name: name,
  //     price: price,
  //     image: image,
  //     type: type,
      // dateEntry: dateEntry,
  //   })
  // })


  }
