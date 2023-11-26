import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: 'register',
    loadChildren: () =>
      import('./auth/component/register/register.routes').then(
        (mod) => mod.registerRoutes
      )
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./auth/component/login/login.routes').then(
        (mod) => mod.loginRoutes
      )
  },
  {
    path: '**',
    redirectTo: ''
  }
];
