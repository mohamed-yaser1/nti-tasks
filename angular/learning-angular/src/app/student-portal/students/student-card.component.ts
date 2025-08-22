import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-student-card',
  template: `
    <div class="border p-2 mb-2">
      <h4>{{student.name}}</h4>
      <p>Age: {{student.age}} | Major: {{student.major}}</p>
      <ng-content></ng-content>
    </div>
  `
})
export class StudentCardComponent {
  @Input() student!: {id:number, name:string, age:number, major:string};
}
