import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpInterceptor,HttpRequest,HttpHandler, HttpEvent  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataUser } from 'src/app/interfaces/interfaces';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AdminService{
  constructor(private http: HttpClient) { }
  //Con esta función crea a los usuarios
  getAccessToken(userData: DataUser): Observable<any> {
    const user = {
      email: userData.email, // traer el valor de los imputs
      password: userData.password, // traer la información de ambos
      rol: userData.rol,
    };
    return this.http.post('http://localhost:8080/users', user);
  }
  //30junio  USO ENDPOINT GET
  getListProducts(): Observable<any> {
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
      // se reemplaza el valor de mi variable que está en environment
      //'AQUÌ VA UN TOKEN'
    })
    return this.http.get('http://localhost:8080/products',{headers});
  }
  getAllUsers(): Observable<any>{
    // const users = {
    //   email: userData.email,
    //   password: userData.password,
    //   rol: userData.rol,
    // }
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
    })
    return this.http.get('http://localhost:8080/users', {headers});
  }

  createProduct(name: string, price:number, image: string, type:string): Observable<any> {
    return this.http.post('http://localhost:8080/products', {
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
  // getAllOrders(): Observable<any>{
    //     return this.http.get<any>('http://localhost:8080/orders',)
    // }
    // createProduct(name: string, price: number, image: string, type: string): Observable<any> {
    //     return this.http.post('http://localhost:8080/users/products', {
    //         name: name,
    //         price: price,
    //         image: image,
    //         type: type,
    //     })
    // }
  
  }
