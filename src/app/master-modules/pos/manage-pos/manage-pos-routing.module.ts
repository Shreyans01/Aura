import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagePosComponent } from './manage-pos.component';

const routes: Routes = [{
  path:'',
  component: ManagePosComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagePosRoutingModule { }
