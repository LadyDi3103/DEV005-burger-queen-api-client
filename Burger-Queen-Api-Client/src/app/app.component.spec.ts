import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppComponent } from './app.component';
import { SharedModule } from '@shared/shared.module';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule, HttpClientTestingModule],
      declarations: [AppComponent]
    }).compileComponents(); // Espera a que se compile el componente
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Burger-Queen-Api-Client'`, () => {
    console.log(app.title);
    expect(app.title).toEqual('Burger-Queen-Api-Client');
  });

  // it('should render title', waitForAsync(() => {
  //   fixture.detectChanges();
  //   fixture.whenStable().then(() => {
  //     fixture.detectChanges();
  //     const compiled = fixture.nativeElement as HTMLElement;
  //     expect(compiled.querySelector('.content title')?.textContent).toContain('Burger-Queen-Api-Client');
  //   });
  // }));
});
