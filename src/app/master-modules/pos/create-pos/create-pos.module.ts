import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatePosRoutingModule } from './create-pos-routing.module';
import { CreatePosComponent } from './create-pos.component';


@NgModule({
  declarations: [CreatePosComponent],
  imports: [
    CommonModule,
    CreatePosRoutingModule
  ]
})
export class CreatePosModule { }
