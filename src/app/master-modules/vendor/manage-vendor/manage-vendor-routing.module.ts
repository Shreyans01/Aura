import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageVendorComponent } from './manage-vendor.component';

const routes: Routes = [{
  path:'',
  component: ManageVendorComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageVendorRoutingModule { }
