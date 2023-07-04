import { HttpClient, HttpHeaders,HttpInterceptor,HttpRequest,HttpHandler, HttpEvent  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Implementara lógica de interceptación aquí
    const authToken = localStorage.getItem('accessToken');
    if(authToken){
      const authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${authToken}`)
      });
      return next.handle(authReq);  
    }
    return next.handle(req);
  }
}
