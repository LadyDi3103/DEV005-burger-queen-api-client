import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './views/login/login-page/login-page.component';
import { HomeWaiterComponent } from './views/home/home-waiter/home-waiter.component';
import { HomeAdminComponent } from './views/home/home-admin/home-admin.component';
import { HomeChefComponent } from './views/home/home-chef/home-chef.component';
import { authGuard } from './services/guards/auth.guard';
import { waiterGuard } from './services/guards/waiter.guard';
import { adminGuard } from './services/guards/admin.guard';
import { chefGuard } from './services/guards/chef.guard';




const routes: Routes = [
  /*lazy-loading
/* se declaran las rutas*/
  {
    path: '', //TODO: http://localhost:4200/ <--- /login
    // loadChildren: ()=> import(`./modules/home/home.module`).then(m => m.HomeModule)
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login', //TODO: http://localhost:4200/ <--- /login
    component: LoginPageComponent,
  },
  {
    path: 'home-waiter', //TODO: http://localhost:4200/ <--- /home
    component: HomeWaiterComponent,
    canActivate: [authGuard, waiterGuard]
  },
  {
    path: 'home-admin', //TODO: http://localhost:4200/ <--- /home
    component: HomeAdminComponent,
    canActivate: [authGuard, adminGuard]
  },
  {
    path: 'home-chef', //TODO: http://localhost:4200/ <--- /home
    component: HomeChefComponent,
    // canActivate: [authGuard]
    canActivate: [authGuard, chefGuard]
  },
  // {
  //   path: 'dashboard' ,//TODO: http://localhost:4200/ <--- /home
  //   loadChildren: ()=> import(`./modules/dashboard/dashboard.module`).then(m => m.DashboardModule)
  // },
  {
    path: '**', //TODO: cualquier ruta redirijirá al home
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
/*Modulo que internamente tiene rutas*/
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
