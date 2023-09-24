import { fakeBackendProvider } from './../../_helpers/fake-backend';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
  AvatarModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
  NavModule,
  ProgressModule,
  TableModule,
  TabsModule,
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ChartjsModule } from '@coreui/angular-chartjs';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ProductsComponent } from './product/products/products.component';
import { AddProductsComponent } from './product/add.products/add.products.component';
import { CustomersComponent } from './customer/customers/customers.component';
import { AddCustomersComponent } from './customer/add-customers/add-customers.component';

@NgModule({
  imports: [DashboardRoutingModule, GridModule, FormModule, CardModule],
  declarations: [
    DashboardComponent,
    ProductsComponent,
    AddProductsComponent,
    CustomersComponent,
    AddCustomersComponent,
  ],
  providers: [fakeBackendProvider],
})
export class DashboardModule {}
