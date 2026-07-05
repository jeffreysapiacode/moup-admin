import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rack-item',
  imports: [],
  templateUrl: './rack-item.html',
  styleUrl: './rack-item.sass',
})
export class RackItem {

  @Input() label?: string;
  @Input() active: boolean = false;

}
