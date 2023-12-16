import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageVendorRoutingModule } from './manage-vendor-routing.module';
import { ManageVendorComponent } from './manage-vendor.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ManageVendorComponent],
  imports: [
    CommonModule,
    ManageVendorRoutingModule,
    MatAutocompleteModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class ManageVendorModule { }
