import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormHomeWaiterComponent } from './form-home-waiter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('FormHomeWaiterComponent', () => {
  let component: FormHomeWaiterComponent;
  let fixture: ComponentFixture<FormHomeWaiterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormHomeWaiterComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule],
    }).compileComponents();
    fixture = TestBed.createComponent(FormHomeWaiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have the word "Submit Order"', ()=>{
    const elementRefSubmit = fixture.debugElement.query(By.css('.btnSubmit'))
    const getInnertextSubmit = elementRefSubmit.nativeElement.innerText

    expect(getInnertextSubmit).toEqual('Submit Order')
  });
  it('should have the word "Cancel Order"', () => {
    const elementRef = fixture.debugElement.query(By.css('.btnCancel'))
    const getInnerText = elementRef.nativeElement.innerText

    expect(getInnerText).toEqual('Cancel Order')
  })
});
