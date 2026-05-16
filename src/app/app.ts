import { Component, signal } from '@angular/core';
import { Main } from './main/main';

@Component({
  selector: 'app-root',
  imports: [Main],
  templateUrl: './app.html',
  styleUrl: './app.sass',
})
export class App {
  protected readonly title = signal('moup-admin');
}
