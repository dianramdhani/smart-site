import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiteComponent } from './site.component';
import { AssetComponent } from './pages/asset/asset.component';

const routes: Routes = [
  { path: '', component: SiteComponent },
  { path: 'ac-pln', component: AssetComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiteRoutingModule {}
