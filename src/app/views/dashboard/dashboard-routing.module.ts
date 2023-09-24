import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { ProductsComponent } from './product/products/products.component';
import { CustomersComponent } from './customer/customers/customers.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      title: 'Dashboard',
    },
  },
  {
    path: 'products',
    component: ProductsComponent,
    data: {
      title: 'Products',
    },
  },
  {
    path: 'customers',
    component: CustomersComponent,
    data: {
      title: 'Customers',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
