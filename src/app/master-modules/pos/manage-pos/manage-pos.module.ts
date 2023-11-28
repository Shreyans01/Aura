import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagePosRoutingModule } from './manage-pos-routing.module';
import { ManagePosComponent } from './manage-pos.component';


@NgModule({
  declarations: [ManagePosComponent],
  imports: [
    CommonModule,
    ManagePosRoutingModule
  ]
})
export class ManagePosModule { }
