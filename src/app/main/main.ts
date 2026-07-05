import { Component } from '@angular/core';
import { NavRack } from './nav-rack/nav-rack';

@Component({
  selector: 'app-main',
  imports: [NavRack],
  templateUrl: './main.html',
  styleUrl: './main.sass',
})
export class Main {}
