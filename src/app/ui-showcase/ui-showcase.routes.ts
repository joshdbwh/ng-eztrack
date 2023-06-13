import { Routes } from '@angular/router';

export default [
  { path: '', redirectTo: 'buttons', pathMatch: 'full' },
  {
    path: '',
    loadComponent: () =>
      import('./feature/buttons/buttons.component').then(
        (c) => c.ButtonsComponent
      ),
  },
] as Routes;
