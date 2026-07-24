import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventBus {
  public onRefresh = new EventEmitter();
}
