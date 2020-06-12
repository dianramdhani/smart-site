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

  selected = {
    startDate: moment('2015-11-18T00:00Z'),
    endDate: moment('2015-11-26T00:00Z'),
  };

  ngModelChange(e): void {
    console.log(e);
  }

  change(e): void {
    console.log(e);
  }

  open(): void {
    this.pickerDirective.open();
  }

  clear(e): void {
    this.selected = null;
  }

  collapse = {
    powerMonitor: false,
  };

  constructor() {}

  ngOnInit(): void {}

  chosenDate(event: Event) {
    console.log(event);
  }
}
