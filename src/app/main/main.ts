import { Component } from '@angular/core';
import { NavRack } from './nav-rack/nav-rack';
import { ViewContainer } from './view-container/view-container';

@Component({
  selector: 'app-main',
  imports: [NavRack, ViewContainer],
  templateUrl: './main.html',
  styleUrl: './main.sass',
})
export class Main {}
