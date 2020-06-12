import { Component, OnInit, ViewChild } from '@angular/core';
import { DaterangepickerDirective } from 'ngx-daterangepicker-material';
import * as moment from 'moment';
import { MatFormFieldControl } from '@angular/material/form-field';

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

  selected = this.ranges.Today;

  invalidDates: moment.Moment[] = [];
  isInvalidDate = (m: moment.Moment) => {
    return this.invalidDates.some((d) => d.isSame(m, 'day'));
  };

  tooltips = [
    { date: moment(), text: 'Today is just unselectable' },
    { date: moment().add(2, 'days'), text: 'Yeeeees!!!' },
  ];
  isTooltipDate = (m: moment.Moment) => {
    const tooltip = this.tooltips.find((tt) => tt.date.isSame(m, 'day'));
    if (tooltip) {
      return tooltip.text;
    } else {
      return false;
    }
  };

  collapse = {
    powerMonitor: false,
  };

  constructor() {}

  timeChange(event: Event) {
    console.log(this.selected);
  }

  ngOnInit(): void {}

  chosenDate(event: Event) {
    console.log(event);
  }
}
