import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CardsComponent } from './cards.component';
import { TimerComponent } from '../timer/timer.component';

describe('CardsComponent', () => {
  let component: CardsComponent;
  let fixture: ComponentFixture<CardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsComponent,TimerComponent],
      imports: [HttpClientTestingModule],
    });
    const client = {
      "client": "hernan",
      "products": [
        {
          "qty": 1,
          "product": {
            "id": 12,
            "name": "Peperoni Pizza",
            "price": 9,
            "image": "https://github.com/LadyDi3103/DEV005-burger-queen-api-client/blob/main/Burger-Queen-Api-Client/src/assets/img/icons8-pizza-100.png?raw=true",
            "type": "meals",
            "dateEntry": "2022-03-05 15:14:10"
          }
        }
      ],
      "status": "pending",
      "dataEntry": "2023-07-18 18:57:58",
      "id": 12
    }

    fixture = TestBed.createComponent(CardsComponent);
    component = fixture.componentInstance;

component.orderOne = client;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
