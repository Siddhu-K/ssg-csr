import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'test_sub/:sub_id',
    loadComponent: () =>
      import('./test-sub/test-sub.component').then((m) => m.TestSubComponent),
  },
];
