import { Route } from '@angular/router';

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
