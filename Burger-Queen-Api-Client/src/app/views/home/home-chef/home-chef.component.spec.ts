import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HomeChefComponent } from './home-chef.component';

describe('HomeChefComponent', () => {
  let component: HomeChefComponent;
  let fixture: ComponentFixture<HomeChefComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeChefComponent],
      imports: [HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(HomeChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
