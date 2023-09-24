import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    name: 'Products',
    url: '/products',
    iconComponent: { name: 'cil-drop' },
  },
  {
    name: 'Customers',
    url: '/customers',
    iconComponent: { name: 'cil-pencil' },
  },
  // {
  //   name: 'Base',
  //   url: '/base',
  //   iconComponent: { name: 'cil-puzzle' },
  //   children: [
  //     {
  //       name: 'Accordion',
  //       url: '/base/accordion',
  //     },
  //   ],
  // },
];
