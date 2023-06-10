import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CsvService } from '../../data-access/csv.service';
import { UploadFileComponent } from 'src/app/shared/ui/upload-file/upload-file.component';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [CommonModule, UploadFileComponent],
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent {
  processedData: any[] = [];

  constructor(private csvService: CsvService, private router: Router) {}

  handleFileInput(file: File): void {
    this.csvService.processCsvFile(file);

    this.router.navigate(['/spending-report/view']);
  }
}
