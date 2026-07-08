import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-upload',
  imports: [FormsModule],
  templateUrl: './upload.html',
  styleUrl: './upload.sass',
})
class Upload {
  @Output() createContentOpen: EventEmitter<boolean> = new EventEmitter();
  selectedAudioFile: File | undefined;
  selectedTranscriptFile?: File;
  formData = {
    title: '',
    description: '',
  };
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  close() {
    this.createContentOpen.emit(false);
  }

  onAudioFileSelected($event: Event) {
    const element = $event.currentTarget as HTMLInputElement;
    let fileList = element.files;
    if (fileList && fileList.length > 0) {
      this.selectedAudioFile = fileList[0];
    }
  }

  onTranscriptFileSelected($event: Event) {
    const element = $event.currentTarget as HTMLInputElement;
    let fileList = element.files;
    if (fileList && fileList.length > 0) {
      this.selectedTranscriptFile = fileList[0];
    }
  }

  upload() {
    const formData = new FormData();
    formData.append('title', this.formData.title);
    formData.append('description', this.formData.description);
    formData.append('file', this.selectedAudioFile || new Blob(), this.selectedAudioFile?.name);
    formData.append(
      'transcript',
      this.selectedTranscriptFile || new Blob(),
      this.selectedTranscriptFile?.name,
    );
    this.http.post(this.apiUrl + '/content/upload', formData).subscribe({
      next: (response) => {
        console.log('Upload successful', response);
      },
      error: (error) => {
        console.error('Upload error', error);
      },
    });
  }
}

export default Upload;
