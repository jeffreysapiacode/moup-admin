import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-detail',
  imports: [],
  templateUrl: './content-detail.html',
  styleUrl: './content-detail.sass',
})
export class ContentDetail {
  @Input() content: any;

}
