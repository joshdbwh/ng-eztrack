import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'link', pathMatch: 'full' },
  {
    path: 'spending-report',
    loadChildren: () => import('./spending-report/spending-report.routes'),
  },
  { path: 'link', loadChildren: () => import('./link/link.routes') },
];
