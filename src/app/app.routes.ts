import { Route } from '@angular/router';
import { AuthService } from './auth/service/auth.service';

export const routes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./auth/component/register/register.routes').then(
        (mod) => mod.registerRoutes
      )
  },
  {
    path: '**',
    redirectTo: ''
  }
];
