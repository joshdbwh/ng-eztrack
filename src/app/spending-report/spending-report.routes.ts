import { Route } from '@angular/router';

export default [
  { path: '', redirectTo: 'view', pathMatch: 'full' },
  {
    path: 'view',
    loadComponent: () =>
      import('./feature/view/view.component').then((c) => c.ViewComponent),
  },
  {
    path: 'upload',
    loadComponent: () =>
      import('./feature/upload/upload.component').then(
        (c) => c.UploadComponent
      ),
  },
] as Route[];
