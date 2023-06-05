export interface PlaidAccount {
  institutionName: string;
  dateAdded: string;
  meta: {
    [key: string]: string;
  };
}

export type PlaidAccounts = PlaidAccount[];
