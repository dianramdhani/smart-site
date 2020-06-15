import { Component, OnInit, ViewChild } from '@angular/core';
import { DaterangepickerDirective } from 'ngx-daterangepicker-material';
import * as moment from 'moment';
import { MatFormFieldControl } from '@angular/material/form-field';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss'],
  providers: [{ provide: MatFormFieldControl, useExisting: SiteComponent }],
})
export class SiteComponent implements OnInit {
  @ViewChild(DaterangepickerDirective, { static: true })
  pickerDirective: DaterangepickerDirective;

  readonly ranges = {
    Today: [moment(), moment()],
    Yesterday: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
    'This Month': [moment().startOf('month'), moment().endOf('month')],
    'Last Month': [
      moment().subtract(1, 'month').startOf('month'),
      moment().subtract(1, 'month').endOf('month'),
    ],
    'Last 3 Month': [
      moment().subtract(3, 'month').startOf('month'),
      moment().subtract(1, 'month').endOf('month'),
    ],
  };

  selected = {
    startDate: this.ranges.Today[0],
    endDate: this.ranges.Today[1],
  };

  viewSelected = this.selected;

  collapse = {
    powerMonitor: false,
  };

  constructor(private sanitizer: DomSanitizer) {}

  timeChange(event: Event) {
    console.log(this.selected);
    this.viewSelected = this.selected;
  }

  ngOnInit(): void {}

  chosenDate(event: Event) {
    console.log(event);
  }

  srcUpdater = this.sanitizer.bypassSecurityTrustResourceUrl;
}
