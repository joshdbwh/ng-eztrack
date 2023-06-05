import { NavItems } from '../interfaces/navItem.interface';

export default [
  {
    path: 'budget',
    title: 'Budget',
    icon: 'savings',
    children: [
      { path: '/budget/view', title: 'View', icon: 'visibility' },
      { path: '/budget/edit', title: 'Edit', icon: 'edit' },
      { path: '/budget/create', title: 'Create', icon: 'add' },
    ],
  },
  {
    path: 'link',
    title: 'Link',
    icon: 'link',
    children: [
      {
        path: '/link/accounts',
        title: 'Accounts',
        icon: 'account_balance_wallet',
      },
      { path: '/link/plaid', title: 'Plaid', icon: 'paid' },
    ],
  },
] as NavItems;
