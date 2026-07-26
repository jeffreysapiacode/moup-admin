import { Routes } from '@angular/router';
import { Main } from './main/main';
import { ContentView } from './main/view-container/content-view/content-view';
import { StatisticsView } from './main/view-container/statistics-view/statistics-view';
import { TranscriptView } from './main/view-container/transcript-view/transcript-view';
import { SettingsView } from './main/view-container/settings-view/settings-view';
import Upload from './main/view-container/content-view/content-upload/content-upload';

export const routes: Routes = [
  { path: 'content', component: ContentView },
  { path: 'statistics', component: StatisticsView },
  { path: 'transcript', component: TranscriptView },
  { path: 'settings', component: SettingsView },
  { path: '**', redirectTo: '/content', pathMatch: 'full' },
];
