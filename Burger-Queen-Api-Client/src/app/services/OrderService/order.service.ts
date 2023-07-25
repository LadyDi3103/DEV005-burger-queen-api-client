import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataOrder } from 'src/app/interfaces/interfaces';

@Injectable({
    providedIn: 'root'
})
//implements OnInit
export class OrderService {
    public apiUrl = 'https://api-mock-laboratoria.onrender.com';
    constructor(private http: HttpClient) { }
    //El WAITER llama a esta función para crear la orden
    createOrder(orderData: DataOrder): Observable<any> {
        return this.http.post(`${this.apiUrl}/orders`, {
            client: orderData.client,
            products: orderData.products,
            status: orderData.status,
            dataEntry: orderData.dataEntry,
        })
    }
    getOrders(): Observable<any> {
        const headers = new HttpHeaders({
            'accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
        })
        return this.http.get<any>(`${this.apiUrl}/orders`, { headers });

    }
    changeStatusOrder(id: any, status: string): Observable<any> {
        const headers = new HttpHeaders({
            'accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
        })
        return this.http.patch<any>(`${this.apiUrl}/orders/${id}`, { status: status, dateProcessed: new Date() }, { headers })
    }
// check body objeto con la información que voy a cambiar...
}


