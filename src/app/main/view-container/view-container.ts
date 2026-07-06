import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-view-container',
  imports: [RouterOutlet],
  templateUrl: './view-container.html',
  styleUrl: './view-container.sass',
})
export class ViewContainer {}
