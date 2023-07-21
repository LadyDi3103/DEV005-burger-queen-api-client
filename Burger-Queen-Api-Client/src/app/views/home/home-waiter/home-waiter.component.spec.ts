import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HomeWaiterComponent } from './home-waiter.component';
import { MenuHomeWaiterComponent } from './childrenComponents/menu/menu-home-waiter/menu-home-waiter.component';
import { FormHomeWaiterComponent } from './childrenComponents/form/form-home-waiter/form-home-waiter.component';
import { ReactiveFormsModule } from '@angular/forms';
describe('HomeWaiterComponent', () => {
  let component: HomeWaiterComponent;
  let fixture: ComponentFixture<HomeWaiterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeWaiterComponent, MenuHomeWaiterComponent, FormHomeWaiterComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule],
    }).compileComponents();
    fixture = TestBed.createComponent(HomeWaiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
