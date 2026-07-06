import { Component } from '@angular/core';
import { RackItem } from './rack-item/rack-item';

@Component({
  selector: 'app-nav-rack',
  imports: [RackItem],
  templateUrl: './nav-rack.html',
  styleUrl: './nav-rack.sass',
})
export class NavRack {
  contentList: any = [
    { label: 'Content', link: 'content' },
    { label: 'Statistics', link: 'statistics' },
    { label: 'Transcript', link: 'transcript' },
    { label: 'Settings', link: 'settings' },
  ];
}
