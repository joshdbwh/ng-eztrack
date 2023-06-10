import { Injectable } from '@angular/core';
import { CsvService } from '../data-access/csv.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { map } from 'rxjs/internal/operators/map';
import { Observable } from 'rxjs/internal/Observable';
import { TransactionItems } from './transactionItem.interface';
import { shareReplay } from 'rxjs/internal/operators/shareReplay';

@Injectable({
  providedIn: 'root',
})
export class FinanceService {
  private processedDataSubject = new BehaviorSubject<TransactionItems>([]);
  processedData$ = this.processedDataSubject.asObservable();

  total$: Observable<number> = this.getData().pipe(
    map((data: TransactionItems) => this.calculateTotal(data))
  );

  totalPerMonth$: Observable<Map<string, number>> = this.getData().pipe(
    map((data: TransactionItems) => this.calculateTotalPerMonth(data))
  );

  totalPerCategory$: Observable<Map<string, number>> = this.getData().pipe(
    map((data: TransactionItems) => this.calculateTotalPerCategory(data))
  );

  constructor(private csvService: CsvService) {
    this.csvService.csvData$.subscribe((data) => {
      const processedData = this.processData(data);
      this.processedDataSubject.next(processedData);
    });
  }

  getData(): Observable<TransactionItems> {
    return this.processedData$.pipe(
      shareReplay({ refCount: true, bufferSize: 1 })
    );
  }

  private processData(data: TransactionItems): TransactionItems {
    // Here you can perform your business logic to process the data
    return data;
  }

  private calculateTotal(data: TransactionItems): number {
    let total = 0;
    data.forEach((item) => {
      total += parseFloat(item.Amount);
    });

    return +total.toFixed(2);
  }

  private calculateTotalPerMonth(data: TransactionItems): Map<string, number> {
    let totalPerMonth = new Map<string, number>();
    // Implement your logic to calculate the total per month here
    data.forEach((item) => {
      const month = item.Date.split('/')[0];
      const amount = parseFloat(item.Amount);

      if (totalPerMonth.has(month)) {
        totalPerMonth.set(month, totalPerMonth.get(month)! + amount);
      } else {
        totalPerMonth.set(month, amount);
      }
    });

    return totalPerMonth;
  }

  private calculateTotalPerCategory(
    data: TransactionItems
  ): Map<string, number> {
    /** TBD */
    return new Map<string, number>();
  }
}
