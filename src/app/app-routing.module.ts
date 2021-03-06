import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'shipper',
    loadChildren: () => import('./features/shipper/shipper.module').then(m => m.ShipperModule)
  },
  {
    path: 'courier',
    loadChildren: () => import('./features/courier/courier.module').then(m => m.CourierModule)
  },
  {
    path: 'guides',
    loadChildren: () => import('./features/guides/guides.module').then(m => m.GuidesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
