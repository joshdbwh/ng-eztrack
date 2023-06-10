import { Route } from '@angular/router';

export default [
  { path: '', redirectTo: 'accounts', pathMatch: 'full' },
  {
    path: 'accounts',
    loadComponent: () =>
      import('./feature/connected-accounts/connected-accounts.component').then(
        (c) => c.ConnectedAccountsComponent
      ),
  },
  {
    path: 'plaid',
    loadComponent: () =>
      import('./feature/plaid/plaid.component').then((c) => c.PlaidComponent),
  },
] as Route[];
