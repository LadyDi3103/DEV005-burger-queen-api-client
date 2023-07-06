import { HttpClient, HttpHeaders,HttpInterceptor,HttpRequest,HttpHandler, HttpEvent  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor() { }
  //El método intercept es el método principal del interceptor y se ejecuta cada vez que se realiza una solicitud HTTP.
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // se obtiene el token de acceso del almacenamiento local
    const authToken = localStorage.getItem('accessToken');
    if(authToken){
      // se crea una nueva solicitud clonando la solicitud original utilizando el método clone
      const authReq = req.clone({
        //se agrega un encabezado de autorización con el token de acceso utilizando el método set de req.headers
        headers: req.headers.set('Authorization', `Bearer ${authToken}`)
      });
      //se envía la nueva solicitud al siguiente manipulador de solicitudes utilizando next.handle(authReq)
      return next.handle(authReq);  
    }
    //Si no se encuentra un token de acceso, se envía la solicitud original al siguiente manipulador de solicitudes utilizando next.handle(req)
    return next.handle(req);
  }
}
