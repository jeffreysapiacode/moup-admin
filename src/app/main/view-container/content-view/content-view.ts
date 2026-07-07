import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';
import { Upload } from './upload/upload';

@Component({
  selector: 'app-content-view',
  imports: [NgClass, Upload],
  templateUrl: './content-view.html',
  styleUrl: './content-view.sass',
})
export class ContentView {
  createContentOpen: boolean = false;

}
