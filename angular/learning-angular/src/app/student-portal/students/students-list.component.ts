import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { StudentCardComponent } from './student-card.component';

@Component({
  standalone: true,
  imports: [NgFor, RouterLink, StudentCardComponent],
  template: `
    <h2>Students List</h2>
    <app-student-card *ngFor="let s of students" [student]="s">
      <a [routerLink]="['/students/details', s.id]">View Details</a>
    </app-student-card>
  `
})
export class StudentsListComponent {
  students = [
    { id: 1, name: 'Sara', age: 21, major: 'CS' },
    { id: 2, name: 'Omar', age: 22, major: 'IT' },
  ];
}
