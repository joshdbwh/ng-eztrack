import { Route } from '@angular/router';

export default [
  { path: '', redirectTo: 'view', pathMatch: 'full' },
  {
    path: 'view',
    loadComponent: () =>
      import('./view/view.component').then((c) => c.ViewComponent),
  },
] as Route[];
