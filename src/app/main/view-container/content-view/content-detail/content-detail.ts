import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import moment from 'moment';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';


@Component({
  selector: 'app-content-detail',
  imports: [FormsModule],
  templateUrl: './content-detail.html',
  styleUrl: './content-detail.sass',
})
export class ContentDetail {
  @Input() content: any;
  @Output() detailContentOpen: EventEmitter<boolean> = new EventEmitter();
  timeoutId: any;
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  close() {
    this.detailContentOpen.emit(false);
  }

  updateContent(content: any) {
    this.http.put(this.apiUrl + `/content/${this.content.uuid}`, content)
      .subscribe({
        next: (data) => {},
        error: (err) => {},
        complete: () => {},
      });
  }

  handleContentChange() {
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => {
      this.updateContent(this.content);
    }, 500);
  }

  formatNumber(value: number) {
    if (value === null) return;
    let str = value.toString();
    let count = 0;
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
      if (count % 3 === 0 && count > 0) {
        newStr = ',' + newStr;
      }
      newStr = str[i] + newStr;
      count++;
    }
    return newStr;
  }

  formatDate(date: any) {
    return moment(date).format('MMMM D, YYYY');
  }

  formatDuration(duration: any) {
    let hours = Math.floor(duration / (60 * 60));
    let minutes = Math.floor(duration / 60 - hours * 60);
    if (hours === 0) {
      return `${minutes} Minutes`;
    }
    return `${hours} Hours ${minutes} Minutes`;
  }
}
