import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-upload',
  imports: [FormsModule],
  templateUrl: './upload.html',
  styleUrl: './upload.sass',
})
export class Upload {
  @Output() createContentOpen: EventEmitter<boolean> = new EventEmitter();
  title?: string;
  description?: string;

  close() {
    this.createContentOpen.emit(false);
  }
}
