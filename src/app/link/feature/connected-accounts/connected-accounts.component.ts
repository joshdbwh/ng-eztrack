import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CardComponent } from 'src/app/shared/ui/card/card.component';
import { IconButtonComponent } from 'src/app/shared/ui/icon-button/icon-button.component';
import { MatTableModule } from '@angular/material/table';
import { PlaidAccounts } from 'src/app/link/utils/plaid.interface';
import { PlaidService } from 'src/app/link/data-access/plaid.service';

@Component({
  selector: 'app-connected-accounts',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatTableModule,
    IconButtonComponent,
  ],
  templateUrl: './connected-accounts.component.html',
  styleUrls: ['./connected-accounts.component.scss'],
})
export class ConnectedAccountsComponent implements OnInit {
  isLoading = true;
  accountBalances: PlaidAccounts = [];

  displayedColumns: string[] = ['Mask', 'Name', 'Balance'];
  dataSource: PlaidAccounts = [];

  constructor(private plaid: PlaidService) {}

  ngOnInit(): void {
    this.plaid.getAccountBalance().subscribe((res: any) => {
      this.accountBalances = res;
      this.dataSource = this.accountBalances;

      this.isLoading = false;
    });
  }
}
