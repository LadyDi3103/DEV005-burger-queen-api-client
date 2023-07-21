import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog'; // Importa MatDialogModule
import { DeleteProductModalComponent } from './delete-product-modal.component';

describe('DeleteProductModalComponent ', () => {
  let component: DeleteProductModalComponent ;
  let fixture: ComponentFixture<DeleteProductModalComponent >;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteProductModalComponent ],
      imports: [MatDialogModule, HttpClientTestingModule], // Agrega MatDialogModule a los módulos de importación
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} }, // Provee el objeto MAT_DIALOG_DATA
      ],
    });
    fixture = TestBed.createComponent(DeleteProductModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
