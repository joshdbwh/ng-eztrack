export interface PlaidAccount {
  account_id: string;
  balances: Balances;
  mask: string;
  name: string;
  official_name?: any;
  subtype: string;
  type: string;
}

export interface Balances {
  available: number;
  current: number;
  iso_currency_code: string;
  limit?: any;
  unofficial_currency_code?: any;
}

export interface PlaidTransaction {
  account_id: string;
  account_owner?: any;
  amount: number;
  authorized_date?: any;
  authorized_datetime?: any;
  category: string[];
  category_id: string;
  check_number?: any;
  date: string;
  datetime?: any;
  iso_currency_code: string;
  location: Location;
  merchant_name: string;
  name: string;
  payment_channel: string;
  payment_meta: Paymentmeta;
  pending: boolean;
  pending_transaction_id?: any;
  personal_finance_category?: any;
  transaction_code?: any;
  transaction_id: string;
  transaction_type: string;
  unofficial_currency_code?: any;
}

interface Paymentmeta {
  by_order_of?: any;
  payee?: any;
  payer?: any;
  payment_method?: any;
  payment_processor?: any;
  ppd_id?: any;
  reason?: any;
  reference_number?: any;
}

interface Location {
  address?: any;
  city?: any;
  country?: any;
  lat?: any;
  lon?: any;
  postal_code?: any;
  region?: any;
  store_number?: any;
}

export type PlaidAccounts = PlaidAccount[];
export type PlaidTransactions = PlaidTransaction[];
