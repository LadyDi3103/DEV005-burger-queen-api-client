import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHomeWaiterComponent } from './form-home-waiter.component';

describe('FormHomeWaiterComponent', () => {
  let component: FormHomeWaiterComponent;
  let fixture: ComponentFixture<FormHomeWaiterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormHomeWaiterComponent]
    });
    fixture = TestBed.createComponent(FormHomeWaiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
