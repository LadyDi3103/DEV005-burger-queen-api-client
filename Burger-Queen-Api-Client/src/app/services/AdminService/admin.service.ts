import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
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
