import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageCustomerComponent } from './manage-customer.component';

const routes: Routes = [{
  path:'',
  component: ManageCustomerComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageCustomerRoutingModule { }
