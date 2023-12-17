import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionFormRoutingModule } from './transaction-form-routing.module';
import { TransactionFormComponent } from './transaction-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';


@NgModule({
  declarations: [TransactionFormComponent],
  imports: [
    CommonModule,
    TransactionFormRoutingModule,
    MatAutocompleteModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TransactionFormModule { }
