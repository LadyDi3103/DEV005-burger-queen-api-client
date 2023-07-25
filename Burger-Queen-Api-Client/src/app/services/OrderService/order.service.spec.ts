import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { OrderService } from './order.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataOrder } from '../../interfaces/interfaces';


describe('OrderService', () => {
    let service: OrderService;
    let httpTestingController: HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        });
        service = TestBed.inject(OrderService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
    it('should return a succesful response', () => {
        // Arange: Crear valores Mock para cada propiedad solicitada
        const orderData: DataOrder = {
            client: 'Diana Maria',
            products: [],
            status: 'peding',
            dataEntry: '2023-01-01',
        }
        // const client = 'Diana Maria';
        // const products = 'Shot coffe';
        // const status = 'peding';
        // const dataEntry = '23:07:23';
        const mockResponse = { status: 200 }

        service.createOrder(orderData).subscribe((res: any) => {
            expect(res.status).toBe(200);
            // expect(res.client).toEqual(orderData.client);
            // expect(res.products).toEqual(orderData.products);
            // expect(res.status).toEqual(orderData.status),
            // expect(res.dataEntry).toEqual(orderData.dataEntry);
        });
        const req = httpTestingController.expectOne(`${service.apiUrl}/orders`)
        expect(req.request.method).toBe('POST');
        req.flush(mockResponse);
    });
    afterEach(() => {
        httpTestingController.verify();
    });
});
