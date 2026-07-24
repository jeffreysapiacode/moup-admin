import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import Upload from './content-upload/content-upload';
import { HttpClient } from '@angular/common/http';
import moment from 'moment';
import { environment } from '../../../../environments/environment';
import { TimeUtils } from '../../../../util/time-utils';
import { ContentDetail } from './content-detail/content-detail';

@Component({
  selector: 'app-content-view',
  imports: [NgClass, Upload, ContentDetail, Upload, Upload],
  templateUrl: './content-view.html',
  styleUrl: './content-view.sass',
})
export class ContentView implements OnInit {
  apiUrl = environment.apiUrl;
  uploadContentOpen: boolean = false;
  detailContentOpen: boolean = false;
  contentList: any = [];
  contentDetail?: any;
  loading: boolean = false;
  loadingDetail: boolean = false;

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

  handleViewDetail(content: any) {
    this.detailContentOpen = true;
    this.loadingDetail = true;
    this.cdr.detectChanges();
    this.http.get(this.apiUrl + `/content/${content.uuid}`).subscribe({
      next: (data) => {
        this.contentDetail = data;
      },
      error: (err) => {},
      complete: () => {
        this.loadingDetail = false;
        this.cdr.detectChanges();
      },
    });
  }
}
