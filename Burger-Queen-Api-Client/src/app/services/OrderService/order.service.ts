import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class OrderService {
constructor(private http: HttpClient) { }
    
createOrder(orderData:{
        // id: any;
        client: string;
        products: [];
        // status: string;
        // dateEntry: string;
        // dateProcessed: string;
    }): Observable<any> {
        return this.http.post('http://localhost:8080/orders', {
            // id: orderData.id,
            cliente: orderData.client,
            products: orderData.products,
            // status: orderData.status,
            // dateEntry: orderData.dateEntry,
            // dateProcessed: orderData.dateProcessed,
        }
        )
    }
    // createProduct(name: string, price: number, image: string, type: string): Observable<any> {
    //     return this.http.post('http://localhost:8080/users/products', {
    //         name: name,
    //         price: price,
    //         image: image,
    //         type: type,
    //     })
    // }
}


