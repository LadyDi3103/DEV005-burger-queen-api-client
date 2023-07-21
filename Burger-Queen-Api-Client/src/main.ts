import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
// se ingresó este código para corregir error sel serviceWorker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/ngsw-worker.js')
    .then(registration => console.log('Service Worker registrado con éxito', registration))
    .catch(error => console.error('Error al registrar el Service Worker', error));
}
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
