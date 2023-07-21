import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPageComponent } from './login-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, FormControl, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
describe('LoginPageComponent', () => {
  let component: LoginPageComponent; //instanciamiento 
  let fixture: ComponentFixture<LoginPageComponent>;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPageComponent],
      providers: [HttpClientTestingModule],
      imports: [FormsModule,HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA], // Agrega esta línea si no necesitas pruebas específicas en los componentes secundarios
    }).compileComponents(); //ojo aqui con el schemas
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  //TODO: Tu primer enunciado el cual debe asegurar lo que siguiente
  //TODO: Debe asegurarse que el formulario sea  invalido
  //TODO: Patron AAA
  //TODO: Arrange
  const mockCredentials = {
    email: 'test@test.com', //TODO: user.waiter@systers.xyz
    password: '123456'
  }
  // const emailForm: any = component.()
  //TODO: Act
  
  //TODO: Assert
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
