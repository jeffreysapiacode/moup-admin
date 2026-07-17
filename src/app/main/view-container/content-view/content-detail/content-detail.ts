import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-content-detail',
  imports: [],
  templateUrl: './content-detail.html',
  styleUrl: './content-detail.sass',
})
export class ContentDetail {
  @Input() content: any;
  @Output() detailContentOpen: EventEmitter<boolean> = new EventEmitter();

  close() {
    this.detailContentOpen.emit(false);
  }

  formatNumber(value: string) {
    let str = value.toString();
    let count = 0;
    let newStr = '';
    for (let i = (str.length - 1); i >= 0; i--) {
      if (count % 3 === 0 && count > 0) {
        newStr = ',' + newStr;
      }
      newStr = str[i] + newStr;
      count++;
    }
    return newStr;
  }
}
