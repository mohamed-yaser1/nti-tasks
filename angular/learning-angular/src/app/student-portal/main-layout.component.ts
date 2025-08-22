import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-main-layout',
  imports: [RouterLink, RouterOutlet],
  template: `
    <nav class="p-3 bg-dark text-white">
      <a routerLink="/" class="me-3 text-white">Home</a>
      <a routerLink="/students" class="me-3 text-white">Students</a>
      <a routerLink="/about" class="text-white">About</a>
    </nav>
    <div class="p-3">
      <router-outlet></router-outlet>
    </div>
  `
})
export class MainLayoutComponent {}
