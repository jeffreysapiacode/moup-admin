import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';
import Upload from './upload/upload';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-content-view',
  imports: [NgClass, Upload],
  templateUrl: './content-view.html',
  styleUrl: './content-view.sass',
})
export class ContentView implements OnInit {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(this.apiUrl + '/content').subscribe({
      next: (response) => {
        console.log('Get successful', response);
      },
      error: (error) => {
        console.error('Get error', error);
      },
    });
  }
  createContentOpen: boolean = false;
}
