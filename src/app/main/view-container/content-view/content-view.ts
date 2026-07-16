import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import Upload from './content-upload/content-upload';
import { HttpClient } from '@angular/common/http';
import moment from 'moment';
import { environment } from '../../../../environments/environment';
import { TimeUtils } from '../../../../util/time-utils';

@Component({
  selector: 'app-content-view',
  imports: [NgClass, Upload],
  templateUrl: './content-view.html',
  styleUrl: './content-view.sass',
})
export class ContentView implements OnInit {
  apiUrl = environment.apiUrl;
  createContentOpen: boolean = false;
  contentList: any = [];

  constructor(
    private http: HttpClient,
    protected cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.http.get(this.apiUrl + '/content').subscribe({
      next: (response) => {
        this.contentList = response;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Get error', error);
      },
    });
  }

  formatDate(date: any) {
    return moment(date).format('M/D/YYYY');
  }

  formatTime(seconds: any) {
    return TimeUtils.formatTime(seconds);
  }
}
