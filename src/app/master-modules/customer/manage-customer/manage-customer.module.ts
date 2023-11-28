import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageCustomerRoutingModule } from './manage-customer-routing.module';
import { ManageCustomerComponent } from './manage-customer.component';


@NgModule({
  declarations: [ManageCustomerComponent],
  imports: [
    CommonModule,
    ManageCustomerRoutingModule
  ]
})
export class ManageCustomerModule { }
