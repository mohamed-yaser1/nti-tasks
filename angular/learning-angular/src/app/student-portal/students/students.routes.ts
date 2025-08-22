import { Routes } from '@angular/router';
import { StudentsListComponent } from './students-list.component';
import { StudentDetailsComponent } from './student-details.component';

export const STUDENTS_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'list', component: StudentsListComponent },
  { path: 'details/:id', component: StudentDetailsComponent }
];
