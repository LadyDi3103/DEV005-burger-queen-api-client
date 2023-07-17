import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs'
import { MatButtonModule } from '@angular/material/button'

import { HomeRoutingModule } from './home-routing.module';
import { HomeWaiterComponent } from './home-waiter/home-waiter.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { HomeChefComponent } from './home-chef/home-chef.component';
import { SharedModule } from '@shared/shared.module';
import { HeaderHomeWaiterComponent } from './home-waiter/childrenComponents/header/header-home-waiter/header-home-waiter.component';
import { MenuHomeWaiterComponent } from './home-waiter/childrenComponents/menu/menu-home-waiter/menu-home-waiter.component';
import { FormHomeWaiterComponent } from './home-waiter/childrenComponents/form/form-home-waiter/form-home-waiter.component';
import { TimerComponent } from './home-chef/Home-chef-Children/timer/timer.component';
import { CardsComponent } from './home-chef/Home-chef-Children/cards/cards.component';
import { DeleteUserModalComponent } from './home-admin/delete-user-modal/delete-user-modal.component';
// import { EditProductModalComponent } from './home-admin/edit-product-modal/edit-product-modal.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    HomeWaiterComponent,
    HomeAdminComponent,
    HomeChefComponent,
    HeaderHomeWaiterComponent,
    MenuHomeWaiterComponent,
    FormHomeWaiterComponent,
    TimerComponent,
    CardsComponent,
    DeleteUserModalComponent,
    // EditProductModalComponent,
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    SharedModule,
    MatTabsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  exports: [
    HomeWaiterComponent,
  ]
})
export class HomeModule { }
