import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs'
import {MatButtonModule} from '@angular/material/button'

import { HomeRoutingModule } from './home-routing.module';
import { HomeWaiterComponent } from './home-waiter/home-waiter.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { HomeChefComponent } from './home-chef/home-chef.component';
import { SharedModule } from '@shared/shared.module';
import { HeaderHomeWaiterComponent } from './home-waiter/childrenComponents/header/header-home-waiter/header-home-waiter.component';
import { MenuHomeWaiterComponent } from './home-waiter/childrenComponents/menu/menu-home-waiter/menu-home-waiter.component';
import { FormHomeWaiterComponent } from './home-waiter/childrenComponents/form/form-home-waiter/form-home-waiter.component';
// import { FooterComponent } from '@shared/Compoments/footer/footer.component';

@NgModule({
  declarations: [
    HomeWaiterComponent,
    HomeAdminComponent,
    HomeChefComponent,
    HeaderHomeWaiterComponent,
    MenuHomeWaiterComponent,
    FormHomeWaiterComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    SharedModule,
    MatTabsModule,
    MatButtonModule
  ],
  exports: [
    HomeWaiterComponent,
  ]
})
export class HomeModule { }
