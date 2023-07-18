import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const waiterGuard: CanActivateFn = (route, state) => {
    const role = localStorage.getItem('Role');
    const router = inject(Router);
    // Si el usuario tiene el rol de "waiter" o "admin", se le permite acceder a la ruta.
    if (role === 'waiter' || role === 'admin') {
        return true;
    } else {
        router.navigate(['/home-chef']);
        return false;
        // se devuelve "false" para bloquear la navegación.
    }
};