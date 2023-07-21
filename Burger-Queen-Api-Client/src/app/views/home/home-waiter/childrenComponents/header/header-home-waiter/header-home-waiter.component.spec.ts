import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HeaderHomeWaiterComponent } from './header-home-waiter.component';

describe('HeaderHomeWaiterComponent', () => {
  let component: HeaderHomeWaiterComponent;
  let fixture: ComponentFixture<HeaderHomeWaiterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderHomeWaiterComponent],
      imports: [HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(HeaderHomeWaiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
