import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginService } from './services/LoginService/login.service';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './views/home/home.module';
import { LoginModule } from './views/login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { HeaderHomeWaiterComponent } from './childrenComponents/header/header-home-waiter/header-home-waiter.component';
// import { MenuHomeWaiterComponent } from './childrenComponents/menu/menu-home-waiter/menu-home-waiter.component';

// import { HomeWaiterComponent } from './views/home/home-waiter/home-waiter.component';
@NgModule({
  declarations: [ //TODO: Declaraciones, componentes, directivas, pipes
    AppComponent
    // LoginPageComponent,
    // HomeWaiterComponent,
    // FooterComponent,
  ],
  imports: [  //TODO: Solo se importan otros modulos
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    SharedModule, 
    HomeModule,
    LoginModule,
    BrowserAnimationsModule,
    //disponible todos los componentes en otros
    //se importará en todos los módulos que se vaya a usar
    ],
  providers: [
    LoginService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
