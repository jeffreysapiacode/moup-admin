import { ChangeDetectorRef, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { EventBus } from '../../../../service/event-bus';

@Component({
  selector: 'app-content-upload',
  imports: [FormsModule],
  templateUrl: './content-upload.html',
  styleUrl: './content-upload.sass',
})
class Upload {
  @Output() uploadContentOpen: EventEmitter<boolean> = new EventEmitter();
  uploading: boolean = false;
  uploadProgress: number = 0;
  uploadProgressPercent: number = 0;
  selectedAudioFile?: File;
  selectedTranscriptFile?: File;
  formData = {
    title: '',
    description: '',
  };
  audioFileLabel: string = 'Audio File';
  transcriptFileLabel: string = 'Transcript File';
  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    protected cdr: ChangeDetectorRef,
    private eventBus: EventBus
  ) {}

  onAudioFileSelected($event: Event) {
    const element = $event.currentTarget as HTMLInputElement;
    let fileList = element.files;
    if (fileList && fileList.length > 0) {
      this.selectedAudioFile = fileList[0];
      this.audioFileLabel = this.selectedAudioFile.name;
    }
  }

  onTranscriptFileSelected($event: Event) {
    const element = $event.currentTarget as HTMLInputElement;
    let fileList = element.files;
    if (fileList && fileList.length > 0) {
      this.selectedTranscriptFile = fileList[0];
      this.transcriptFileLabel = this.selectedTranscriptFile.name;
    }
  }

  upload() {
    if (this.uploading) return;
    if (!this.formData.title || !this.formData.description || !this.selectedAudioFile) {
      return;
    }
    const formData = new FormData();
    formData.append('title', this.formData.title);
    formData.append('description', this.formData.description);
    formData.append('file', this.selectedAudioFile || new Blob(), this.selectedAudioFile?.name);
    formData.append(
      'transcript',
      this.selectedTranscriptFile || new Blob(),
      this.selectedTranscriptFile?.name,
    );
    this.http
      .post(this.apiUrl + '/content/upload', formData, {
        reportProgress: true,
        observe: 'events',
      })
      .subscribe({
        next: (event: HttpEvent<any>) => {
          switch (event.type) {
            case HttpEventType.Sent:
              this.uploading = true;
              break;
            case HttpEventType.UploadProgress:
              if (event.total) {
                this.uploadProgress = Math.round((100 * event.loaded) / event.total);
                this.uploadProgressPercent = (event.loaded * 125.6) / event.total;
                this.cdr.detectChanges();
              }
              break;
            case HttpEventType.Response:
              this.eventBus.onRefresh.emit();
              this.uploading = false;
              this.reset();
              this.close();
              this.cdr.detectChanges();
              break;
          }
        },
        error: (error) => {
          console.error('Upload error', error);
        },
        complete: () => {}
      });
  }

  reset() {
    this.selectedAudioFile = undefined;
    this.selectedTranscriptFile = undefined;
    this.formData = {
      title: '',
      description: '',
    };
    this.audioFileLabel = 'Audio File';
    this.transcriptFileLabel = 'Transcript File';
  }

  close() {
    this.uploadContentOpen.emit(false);
  }
}

export default Upload;
