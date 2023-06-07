import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './views/login/login-page/login-page.component';
import { HomeWaiterComponent } from './views/home/home-waiter/home-waiter.component';

const routes: Routes = [  /*lazy-loading
/* se declaran las rutas*/
{
  path: '' ,//TODO: http://localhost:4200/ <--- /login
  // loadChildren: ()=> import(`./modules/home/home.module`).then(m => m.HomeModule)
  redirectTo: 'login', pathMatch: 'full'
},
{
  path: 'login' ,//TODO: http://localhost:4200/ <--- /login
  component:LoginPageComponent
},
{
  path: 'home' ,//TODO: http://localhost:4200/ <--- /home
  component: HomeWaiterComponent
},
// {
//   path: 'dashboard' ,//TODO: http://localhost:4200/ <--- /home
//   loadChildren: ()=> import(`./modules/dashboard/dashboard.module`).then(m => m.DashboardModule)
// },
{
  path: '**' ,//TODO: cualquier ruta redirijirá al home
  redirectTo: 'home' , pathMatch: 'full'
}
];
/*Modulo que internamente tiene rutas*/ 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
