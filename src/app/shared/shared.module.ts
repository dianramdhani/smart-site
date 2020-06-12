import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

@NgModule({
  declarations: [],
  imports: [CommonModule, NgbModule],
  exports: [NgbModule, MatIconModule, NgxDaterangepickerMd],
})
export class SharedModule {}
