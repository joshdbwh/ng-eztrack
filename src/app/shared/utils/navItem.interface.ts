export interface NavItem {
  path: string;
  title: string;
  icon: string;
  children?: NavItems;
}

export type NavItems = NavItem[];
