// import { Injectable } from '@angular/core';
// import { 
//     CanActivate,
//     ActivatedRouteSnapshot,
//     RouterStateSnapshot,
//     UrlTree,
//     Router } from '@angular/router';
// import { Observable } from 'rxjs';
// import { LoginService } from '../LoginService/login.service';

// @Injectable({
//     providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {

//     constructor(private loginService: LoginService, private router: Router) { }   
//     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
//         const accessToken = localStorage.getItem('accessToken');

//         if (!accessToken) {
//             this.router.navigate(['/login']);
//             return false;
//         } 
//         return true;
// }

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
    const AuthToken = localStorage.getItem("accessToken");
    console.log(AuthToken, 'TOKEN');
    
    const router = inject(Router);
    if (AuthToken) {
        return true;
    } else {
        router.navigate(['/login'])
        return false;
    }
};