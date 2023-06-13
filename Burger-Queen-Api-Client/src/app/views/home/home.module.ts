import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeWaiterComponent } from './home-waiter/home-waiter.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { HomeChefComponent } from './home-chef/home-chef.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

// import { FooterComponent } from '@shared/Compoments/footer/footer.component';

@NgModule({
  declarations: [
    HomeWaiterComponent,
    HomeAdminComponent,
    HomeChefComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    SharedModule, 
  ],
  exports: [
    HomeWaiterComponent,
  ]
})
export class HomeModule { }
