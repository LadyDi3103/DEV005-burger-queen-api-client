import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormHomeWaiterComponent } from './form-home-waiter.component';
// import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


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
});
