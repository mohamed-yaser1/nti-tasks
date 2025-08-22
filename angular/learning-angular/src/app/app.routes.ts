import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: 'student-portal',
    loadChildren: () =>
      import('./student-portal/app.routes').then(m => m.STUDENT_PORTAL_ROUTES)
  },
  { path: '', redirectTo: 'student-portal', pathMatch: 'full' }
];
