import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HomeAdminComponent } from './home-admin.component';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('HomeAdminComponent', () => {
  let component: HomeAdminComponent;
  let fixture: ComponentFixture<HomeAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeAdminComponent],
      imports: [MatDialogModule, HttpClientTestingModule],
      providers:[
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
    });
    fixture = TestBed.createComponent(HomeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
