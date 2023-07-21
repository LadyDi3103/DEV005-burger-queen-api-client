import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MenuHomeWaiterComponent } from './menu-home-waiter.component';

describe('MenuHomeWaiterComponent', () => {
  let component: MenuHomeWaiterComponent;
  let fixture: ComponentFixture<MenuHomeWaiterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuHomeWaiterComponent],
      imports: [HttpClientTestingModule], 
    });
    fixture = TestBed.createComponent(MenuHomeWaiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
