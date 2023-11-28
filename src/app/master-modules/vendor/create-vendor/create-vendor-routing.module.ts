import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateVendorComponent } from './create-vendor.component';

const routes: Routes = [{
  path:'',
  component: CreateVendorComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateVendorRoutingModule { }
