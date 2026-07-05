import { Component } from '@angular/core';
import { RackItem } from './rack-item/rack-item';

@Component({
  selector: 'app-nav-rack',
  imports: [RackItem],
  templateUrl: './nav-rack.html',
  styleUrl: './nav-rack.sass',
})
export class NavRack {
  content: any = ['Content', 'Statistics', 'Transcript', 'Settings'];
}
