import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

import { SiteRoutingModule } from './site-routing.module';
import { SiteComponent } from './site.component';
import { SharedModule } from '@shared/shared.module';
import { AssetComponent } from './pages/asset/asset.component';

@NgModule({
  declarations: [SiteComponent, AssetComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SiteRoutingModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    NgxDaterangepickerMd.forRoot(),
  ],
})
export class SiteModule {}
