import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
    const role = localStorage.getItem('role');
    console.log(role, 'ROLE');
    
    const router = inject(Router);
    if (role === 'admin') {
        return true;
    } else {
        if (role === 'waiter') {
            router.navigate(['/home-waiter']);
        } else {
            router.navigate(['/home-chef']);
        }
        return false;
    }
};