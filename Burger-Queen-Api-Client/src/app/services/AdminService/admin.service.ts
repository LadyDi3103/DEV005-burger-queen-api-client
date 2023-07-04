import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpInterceptor,HttpRequest,HttpHandler, HttpEvent  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AdminService{
  // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   // Implementara lógica de interceptación aquí
  //   const authToken = localStorage.getItem('accessToken');
  //   if(authToken){
  //     const authReq = req.clone({
  //       headers: req.headers.set('Authorization', `Bearer ${authToken}`)
  //     });
  //     return next.handle(authReq);  
  //   }
  //   return next.handle(req);
  // }

  constructor(private http: HttpClient) { }
  //Con esta función crea a los usuarios
  getAccessToken(email: string, password: string, rol: string): Observable<any> {
    const user = {
      email: email, // traer el valor de los imputs
      password: password, // traer la información de ambos
      rol: rol,
    };
    return this.http.post('http://localhost:8080/users', user);

  }
  // intercept(req: HttpRequest, next: HttpHandler) {
  //   const token = this.authService.getJWTToken();
  //   req = req.clone({
  //     url:  req.url,
  //     setHeaders: {
  //       Authorization: `Bearer ${token}`
  //     }
  //   });
  //   return next.handle(req);
  // }

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
