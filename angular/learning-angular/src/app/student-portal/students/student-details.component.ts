import { Component, OnInit, OnChanges, AfterViewInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgIf],
  template: `
    <h2>Student Details</h2>
    <div *ngIf="student">
      <p><b>Name:</b> {{student.name}}</p>
      <p><b>Age:</b> {{student.age}}</p>
      <p><b>Major:</b> {{student.major}}</p>
      <button (click)="changeAge()">Change Age</button>
    </div>
  `
})
export class StudentDetailsComponent implements OnInit, OnChanges, AfterViewInit {
  student: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log('ngOnInit');
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.student = { id, name: 'Student ' + id, age: 20, major: 'CS' };
  }

  ngOnChanges(changes: SimpleChanges) { console.log('ngOnChanges', changes); }
  ngAfterViewInit() { console.log('ngAfterViewInit'); }

  changeAge() {
    this.student = { ...this.student, age: this.student.age + 1 };
  }
}
