import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import  *  as mockRaw from "../../data/user.json"

describe('LoginService', () => {
  let service: LoginService;
  let httpTestingController: HttpTestingController;
  // let mockUser: any = (mockRaw as any).default
  // let HttpClientSpy: { post: jasmine.Spy }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    // HttpClientSpy = jasmine.createSpyObj('httpClient', ['post'])
    // service = new LoginService(HttpClientSpy as any);
    service = TestBed.inject(LoginService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('test_valid_credentials_returns_successful_response', () => {
    const email = 'user.admin@systers.xyz';
    const password = '123456';
    const mockResponse = {status:200}
    // const loginService = new LoginService(new HttpClient(), new Router());

    service.getCredentials(email, password).subscribe(response => {
        expect(response.status).toBe(200);
    });
    const req = httpTestingController.expectOne(`${service.apiUrl}/login`);
    expect(req.request.method).toBe('POST');
    req.flush(mockResponse);
});
//Patrón de prueba AAA
it('should redirect to login page', () => {
  //Arrange: Crear un spy para el método navigateByUrl del objeto router
  const navigateByUrlSpy = spyOn(TestBed.inject(Router), 'navigateByUrl');
  //Act: Llamar a la función logout del servicio
  service.logout();
  //Assert: Verificar que el método navigateByUrl haya sido llamado con el argumento '/login' Es la ruta a donde se redirige.
  expect(navigateByUrlSpy).toHaveBeenCalledWith('/login');
});
});
