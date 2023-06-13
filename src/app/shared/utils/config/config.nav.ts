import { NavItems } from '../navItem.interface';

export default [
  {
    path: 'spending-report',
    title: 'Spending Report',
    icon: 'savings',
    children: [
      { path: '/spending-report/view', title: 'View', icon: 'visibility' },
      {
        path: '/spending-report/upload',
        title: 'Upload',
        icon: 'cloud_upload',
      },
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
  {
    path: 'ui-showcase',
    title: 'UI Showcase',
    icon: 'view_quilt',
    children: [
      { path: '/ui-showcase/buttons', title: 'Buttons', icon: 'gamepad' },
    ],
  },
] as NavItems;
