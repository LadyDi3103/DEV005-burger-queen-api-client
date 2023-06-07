import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from '@shared/shared.module';
import { LoginPageComponent } from './views/login/login-page/login-page.component';

LoginPageComponent
@NgModule({
  declarations: [ //TODO: Declaraciones, componentes, directivas, pipes
    AppComponent,
    LoginPageComponent,
  ],
  imports: [  //TODO: Solo se importan otros modulos
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
