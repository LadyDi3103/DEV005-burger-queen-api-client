import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS, } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginService } from './services/LoginService/login.service';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './views/home/home.module';
import { LoginModule } from './views/login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptorService } from './services/interceptors/auth-interceptor.service';
import { MatDialogModule } from '@angular/material/dialog'
// import { AuthGuard } from './services/guards/auth.guard';

// import { TimerComponent } from './src/app/views/home-chef/Home-chef-Children/timer/timer.component';
@NgModule({
  //TODO: Declaraciones, componentes, directivas, pipes
  declarations: [
    AppComponent,
    //  TimerComponent
  ],
  //TODO: Solo se importan otros modulos
  //disponible todos los componentes en otros
  //se importará en todos los módulos que se vaya a usar
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    LoginModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [
    LoginService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    // AuthGuard

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
