import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'create-customer',
    loadChildren: () => import('./master-modules/customer/create-customer/create-customer.module').then(m => m.CreateCustomerModule)
  },
  {
    path: 'manage-customer',
    loadChildren: () => import('./master-modules/customer/manage-customer/manage-customer.module').then(m => m.ManageCustomerModule)
  },
  {
    path: 'create-product',
    loadChildren: () => import('./master-modules/product/create-product/create-product.module').then(m => m.CreateProductModule)
  },
  {
    path: 'manage-product',
    loadChildren: () => import('./master-modules/product/manage-product/manage-product.module').then(m => m.ManageProductModule)
  },
  {
    path: 'create-pos',
    loadChildren: () => import('./master-modules/pos/create-pos/create-pos.module').then(m => m.CreatePosModule)
  },
  {
    path: 'manage-pos',
    loadChildren: () => import('./master-modules/pos/manage-pos/manage-pos.module').then(m => m.ManagePosModule)
  },
  {
    path: 'create-vendor',
    loadChildren: () => import('./master-modules/vendor/create-vendor/create-vendor.module').then(m => m.CreateVendorModule)
  },
  {
    path: 'manage-vendor',
    loadChildren: () => import('./master-modules/vendor/manage-vendor/manage-vendor.module').then(m => m.ManageVendorModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
