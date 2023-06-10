import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs/internal/Subscription';
import { FinanceService } from '../../utils/finance.service';
import { MatTableModule } from '@angular/material/table';
import { CardComponent } from '../../../shared/ui/card/card.component';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [CommonModule, CardComponent, MatTableModule],
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnDestroy {
  processedData: any[] = [];
  total = 0;
  totalPerMonth = new Map<string, number>();
  totalPerCategory = new Map<string, number>();

  private subscription: Subscription = new Subscription();

  constructor(private financeService: FinanceService) {
    this.subscription.add(
      this.financeService.total$.subscribe((total) => {
        this.total = total;
      })
    );

    this.subscription.add(
      this.financeService.totalPerMonth$.subscribe((totalPerMonth) => {
        this.totalPerMonth = totalPerMonth;
      })
    );

    this.subscription.add(
      this.financeService.totalPerCategory$.subscribe((totalPerCategory) => {
        this.totalPerCategory = totalPerCategory;
      })
    );
  }

  ngOnDestroy() {
    console.log(`Tearing down ViewComponent`);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
