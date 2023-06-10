import { Injectable } from '@angular/core';
import * as Papa from 'papaparse';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root',
})
export class CsvService {
  private csvDataSubject = new Subject<any[]>();
  csvData$ = this.csvDataSubject.asObservable();

  processCsvFile(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      console.log('processing CSV...');
      const raw = reader.result?.toString();
      const data = this.parseCsv(raw || '');
      this.csvDataSubject.next(data);
    };
    reader.readAsText(file);
  }

  private parseCsv(raw: string): any[] {
    return Papa.parse(raw, { header: true }).data as object[];
  }
}
