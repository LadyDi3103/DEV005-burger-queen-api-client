import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeWaiterComponent } from './home-waiter/home-waiter.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { HomeChefComponent } from './home-chef/home-chef.component';


@NgModule({
  declarations: [
    HomeWaiterComponent,
    HomeAdminComponent,
    HomeChefComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
