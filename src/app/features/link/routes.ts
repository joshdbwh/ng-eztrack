import { Route } from '@angular/router';

export default [
  { path: '', redirectTo: 'accounts', pathMatch: 'full' },
  {
    path: 'accounts',
    loadComponent: () =>
      import('./accounts/accounts.component').then((c) => c.AccountsComponent),
  },
  {
    path: 'plaid',
    loadComponent: () =>
      import('./plaid/plaid.component').then((c) => c.PlaidComponent),
  },
] as Route[];
