import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upload-file',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="upload-file">
      <input type="file" id="file" (change)="handleFileInput($event)" />
    </div>
  `,
  styleUrls: ['./upload-file.component.scss'],
})
export class UploadFileComponent {
  @Output() file = new EventEmitter<any>();

  constructor() {}

  handleFileInput(e: Event) {
    const event = e?.target as HTMLInputElement;
    const file = event?.files?.item(0);

    if (file && file.type === 'text/csv') {
      this.file.emit(file);
    } else {
      console.log('Invalid file type');
    }
  }
}
