import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateCustomerRoutingModule } from './create-customer-routing.module';
import { CreateCustomerComponent } from './create-customer.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CreateCustomerComponent],
  imports: [
    CommonModule,
    CreateCustomerRoutingModule,
    ReactiveFormsModule
  ]
})
export class CreateCustomerModule { }
