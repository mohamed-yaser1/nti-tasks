import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  todos: string[] = [];
  newTask: string = '';
  editIndex: number | null = null;

  addOrUpdateTask() {
    if (!this.newTask.trim()) return;

    if (this.editIndex === null) {
      // Add new task
      this.todos.push(this.newTask.trim());
    } else {
      // Update existing task
      this.todos[this.editIndex] = this.newTask.trim();
      this.editIndex = null;
    }
    this.newTask = '';
  }

  removeTask(index: number) {
    this.todos.splice(index, 1);

    // If we were editing this one, reset input
    if (this.editIndex === index) {
      this.newTask = '';
      this.editIndex = null;
    }
  }

  editTask(index: number) {
    this.newTask = this.todos[index];
    this.editIndex = index;
  }
}

