import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'test/:id',
    loadComponent: () =>
      import('./test/test.component').then((m) => m.TestComponent),
    loadChildren: () =>
      import('./test/test.routes').then((m) => m.routes),
  },
];
