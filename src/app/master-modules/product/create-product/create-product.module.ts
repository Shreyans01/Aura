import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateProductRoutingModule } from './create-product-routing.module';
import { CreateProductComponent } from './create-product.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateProductComponent],
  imports: [
    CommonModule,
    CreateProductRoutingModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class CreateProductModule { }
