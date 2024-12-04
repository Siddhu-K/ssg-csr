import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'test_sub',
    loadComponent: () =>
      import('./test-sub/test-sub.component').then((m) => m.TestSubComponent),
  },
];
