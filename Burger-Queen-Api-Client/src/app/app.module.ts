import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from '@shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
// import { AuthService } from './services/Auth/auth.service';
// import { LoginService } from './services/login/login.service';
import { LoginPageComponent } from './views/login/login-page/login-page.component';


@NgModule({
  declarations: [ //TODO: Declaraciones, componentes, directivas, pipes
    AppComponent,
    LoginPageComponent,
  ],
  imports: [  //TODO: Solo se importan otros modulos
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
