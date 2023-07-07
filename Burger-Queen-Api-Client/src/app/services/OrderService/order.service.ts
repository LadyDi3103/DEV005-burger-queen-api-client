import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataOrder } from 'src/app/interfaces/interfaces';

@Injectable({
    providedIn: 'root'
})
//implements OnInit
export class OrderService {
    constructor(private http: HttpClient) { }
    //El WAITER llama a esta función para crear la orden
    createOrder(orderData: DataOrder): Observable<any> {
        return this.http.post('http://localhost:8080/orders', {
            cliente: orderData.client,
            products: orderData.products,
            status: orderData.status,
        })
    }
    getOrders(): Observable<any> {
        const headers = new HttpHeaders({
            'accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
        })
        return this.http.get<any>('http://localhost:8080/orders', { headers });

    }


    // sendOrder(order:): Observable<any>{
    //   const token = localStorage.getItem("accessToken");
    //   const headers = new HttpHeaders({
    //     Authorization: `Bearer ${token}`
    //   });
    //   return this.http.post<any>('http://localhost:8080/orders', {order}, { headers });
    // }
}


