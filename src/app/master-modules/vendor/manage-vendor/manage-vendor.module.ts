import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageVendorRoutingModule } from './manage-vendor-routing.module';
import { ManageVendorComponent } from './manage-vendor.component';


@NgModule({
  declarations: [ManageVendorComponent],
  imports: [
    CommonModule,
    ManageVendorRoutingModule
  ]
})
export class ManageVendorModule { }
