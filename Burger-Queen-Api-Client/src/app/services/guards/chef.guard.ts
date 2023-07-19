import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const chefGuard: CanActivateFn = (route, state) => {
    const role = localStorage.getItem('role');
    const router = inject(Router);
    // Si es así, se permite el acceso a la ruta y se devuelve true.
    if (role === 'chef' || role === 'admin') {
        return true;
    } else {
        router.navigate(['/home-waiter']);
        return false;
    }
};