import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateVendorRoutingModule } from './create-vendor-routing.module';
import { CreateVendorComponent } from './create-vendor.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CreateVendorComponent],
  imports: [
    CommonModule,
    CreateVendorRoutingModule,
    ReactiveFormsModule
  ]
})
export class CreateVendorModule { }
