import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'link', pathMatch: 'full' },
  {
    path: 'spending-report',
    loadChildren: () => import('./spending-report/spending-report.routes'),
  },
  { path: 'link', loadChildren: () => import('./link/link.routes') },
  {
    path: 'ui-showcase',
    loadChildren: () => import('./ui-showcase/ui-showcase.routes'),
  },
];
