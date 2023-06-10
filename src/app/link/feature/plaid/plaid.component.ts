import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NgxPlaidLinkModule,
  PlaidOnSuccessArgs,
  PlaidOnExitArgs,
  PlaidOnEventArgs,
} from 'ngx-plaid-link';

import { PlaidService } from '../../data-access/plaid.service';

@Component({
  selector: 'app-plaid',
  standalone: true,
  imports: [CommonModule, NgxPlaidLinkModule],
  templateUrl: './plaid.component.html',
  styleUrls: ['./plaid.component.scss'],
})
export class PlaidComponent implements OnInit {
  linkToken$ = this.plaid.linkToken$;

  constructor(private plaid: PlaidService) {}

  ngOnInit(): void {}

  onSuccess($event: PlaidOnSuccessArgs) {
    console.log('onSuccess', $event);
    this.plaid.getAccessToken($event.token).subscribe((res) => {
      console.log(`access token fetched: ${res}`);
    });
  }
  onExit($event: PlaidOnExitArgs) {
    console.log('onExit', $event);
  }
  onLoad($event: any) {
    console.log('onLoad', $event);
  }
  onEvent($event: PlaidOnEventArgs) {
    console.log('onEvent', $event);
  }
}
