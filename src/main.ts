import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { App } from './app/app';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    providePrimeNG({
      theme: {
        preset: Aura
      }
    })
  ]
});