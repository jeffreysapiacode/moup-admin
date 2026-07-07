import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-upload',
  imports: [],
  templateUrl: './upload.html',
  styleUrl: './upload.sass',
})
export class Upload {

  @Output() createContentOpen: EventEmitter<boolean> = new EventEmitter();

  close() {
    this.createContentOpen.emit(false);
  }

}
