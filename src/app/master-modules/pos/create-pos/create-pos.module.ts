import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatePosRoutingModule } from './create-pos-routing.module';
import { CreatePosComponent } from './create-pos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';


@NgModule({
  declarations: [CreatePosComponent],
  imports: [
    CommonModule,
    CreatePosRoutingModule,
    MatAutocompleteModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CreatePosModule { }
