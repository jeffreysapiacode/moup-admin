import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import moment from 'moment';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { EventBus } from '../../../../service/event-bus';


@Component({
  selector: 'app-content-detail',
  imports: [FormsModule],
  templateUrl: './content-detail.html',
  styleUrl: './content-detail.sass',
})
export class ContentDetail {
  @Input() content?: any;
  @Input() loading: boolean = false;
  @Output() detailContentOpen: EventEmitter<boolean> = new EventEmitter();
  apiUrl = environment.apiUrl;
  deleting: boolean = false;

  constructor(private http: HttpClient,
              private eventBus: EventBus) { }

  updateContent(content: any) {
    this.http.put(this.apiUrl + `/content/${this.content.uuid}`, content).subscribe({
      next: (data) => {
        this.content = data;
      },
      error: (err) => {},
      complete: () => {},
    });
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

  handleTitleChange($event: any) {
    this.content.title = $event;
    this.updateContent(this.content);
  }

  handleDescriptionChange($event: any) {
    this.content.description = $event;
    this.updateContent(this.content);
  }

  delete() {
    if (this.deleting) {
      return;
    }
    this.deleting = true;
    this.http.delete(this.apiUrl + `/content/${this.content.uuid}`)
      .subscribe({
        next: (data) => {
          this.close();
        },
        error: (err) => {},
        complete: () => {
          this.deleting = false;
        },
      });
  }

  close() {
    this.eventBus.onRefresh.emit();
    this.detailContentOpen.emit(false);
  }
}
