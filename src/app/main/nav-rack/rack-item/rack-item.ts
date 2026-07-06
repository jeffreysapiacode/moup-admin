import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-rack-item',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './rack-item.html',
  styleUrl: './rack-item.sass',
})
export class RackItem {
  @Input() content?: any;
  @Input() active: boolean = false;
}
