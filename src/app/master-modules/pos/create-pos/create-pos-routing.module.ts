import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePosComponent } from './create-pos.component';

const routes: Routes = [{
  path:'',
  component: CreatePosComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatePosRoutingModule { }
