import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataOrder } from 'src/app/interfaces/interfaces';

@Injectable({
    providedIn: 'root'
})

export class OrderService {
constructor(private http: HttpClient) { }

createOrder(orderData:DataOrder): Observable<any> {
        return this.http.post('http://localhost:8080/orders', {
            cliente: orderData.client,
            products: orderData.products,
            status: orderData.status,
        }
        )
    }
    // sendOrder(order:): Observable<any>{
    //   const token = localStorage.getItem("accessToken");
    //   const headers = new HttpHeaders({
    //     Authorization: `Bearer ${token}`
    //   });
    //   return this.http.post<any>('http://localhost:8080/orders', {order}, { headers });
    // }
}


