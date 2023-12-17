import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyFormRoutingModule } from './company-form-routing.module';
import { CompanyFormComponent } from './company-form.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CompanyFormComponent],
  imports: [
    CommonModule,
    CompanyFormRoutingModule,
    MatAutocompleteModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CompanyFormModule { }
