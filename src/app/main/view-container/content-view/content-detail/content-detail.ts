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
}
