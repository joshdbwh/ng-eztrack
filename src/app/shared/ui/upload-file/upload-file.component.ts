import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { IconButtonComponent } from '../icon-button/icon-button.component';

@Component({
  selector: 'app-upload-file',
  standalone: true,
  imports: [CommonModule, IconButtonComponent],
  template: `
    <div class="upload-file">
      <app-icon-button icon="upload" (event)="file.click()" />
      <input
        hidden
        type="file"
        id="file"
        #file
        (change)="handleFileInput($event)"
      />
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
