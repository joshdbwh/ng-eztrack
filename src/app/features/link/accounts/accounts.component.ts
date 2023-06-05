import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { IconComponent } from 'src/app/shared/components/icon/icon.component';
import { IconButtonComponent } from 'src/app/shared/components/icon-button/icon-button.component';
import { MatTableModule } from '@angular/material/table';
import { PlaidAccounts } from 'src/app/core/interfaces/plaid.interface';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    MatGridListModule,
    MatTableModule,
    IconButtonComponent,
  ],
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
})
export class AccountsComponent {
  displayedColumns: string[] = ['institutionName', 'dateAdded', 'balance'];
  dataSource = connectedAccounts;
}

const connectedAccounts: PlaidAccounts = [
  {
    institutionName: 'Chase',
    dateAdded: '01/01/2023',
    meta: {
      balance: '1000',
    },
  },
  {
    institutionName: 'Amex',
    dateAdded: '02/04/2023',
    meta: {
      balance: '2000',
    },
  },
  {
    institutionName: 'Deutsche Bank',
    dateAdded: '05/28/2023',
    meta: {
      balance: '400',
    },
  },
];
