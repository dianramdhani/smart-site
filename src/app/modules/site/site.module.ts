import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { SiteComponent } from './site.component';
import { SharedModule } from '@shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AssetComponent } from './pages/asset/asset.component';

@NgModule({
  declarations: [SiteComponent, AssetComponent],
  imports: [CommonModule, SiteRoutingModule, SharedModule],
})
export class SiteModule {}
