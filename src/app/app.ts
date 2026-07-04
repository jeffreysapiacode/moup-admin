import { Component, signal } from '@angular/core';
import { Main } from './main/main';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Main, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.sass',
})
export class App {
  protected readonly title = signal('moup-admin');
}
