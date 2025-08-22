import { Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { NotFoundComponent } from './not-found.component';

export const STUDENT_PORTAL_ROUTES: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      {
        path: 'students',
        loadChildren: () =>
          import('./students/students.routes').then(m => m.STUDENTS_ROUTES),
      },
    ],
  },
  { path: '**', component: NotFoundComponent }
];
