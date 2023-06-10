import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { tap } from 'rxjs/internal/operators/tap';
import { PlaidTransactions } from '../utils/plaid.interface';

const _API = 'http://localhost:8000';
const _PLAID_ACCESS_TOKEN =
  'access-development-39d1e755-f2a5-48e4-8501-2fdb5a2ebaea';

@Injectable({
  providedIn: 'root',
})
export class PlaidService {
  private _linkToken = new BehaviorSubject<string>('');
  linkToken$ = this._linkToken.asObservable();

  constructor(private http: HttpClient) {
    this.getLinkToken().subscribe((res) => {
      this._linkToken.next(res);
    });
  }

  getLinkToken() {
    return this.http
      .post(`${_API}/api/create_link_token`, {})
      .pipe(map((res: any) => res.link_token));
  }

  getAccessToken(publicToken: string) {
    return this.http
      .post(`${_API}/api/set_access_token`, { public_token: publicToken })
      .pipe(map((res: any) => res.access_token));
  }

  getAccountBalance() {
    return this.http
      .get(`${_API}/api/balance`)
      .pipe(map((res: any) => res.accounts));
  }

  getTransactions() {
    return this.http.get<PlaidTransactions>(`${_API}/api/transactions`).pipe(
      map((res: PlaidTransactions) => res),
      tap((res) => console.log(res))
    );
  }
}
