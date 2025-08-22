import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template:`
    <h1 class="p-3 bg-primary text-white">My Main App</h1>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'learning-angular';
}
