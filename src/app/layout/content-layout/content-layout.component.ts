import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { replace } from 'feather-icons';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss'],
})
export class ContentLayoutComponent
  implements OnInit, AfterViewInit, OnDestroy {
  scriptElements: HTMLScriptElement[] = [document.createElement('script')];

  constructor() {}

  ngOnInit() {
    this.scriptElements[0].src = './dashforge.js';
    this.scriptElements.forEach((scriptElement) => {
      document.body.appendChild(scriptElement);
    });
    replace();
  }

  ngOnDestroy() {
    this.scriptElements.forEach((scriptElement) => {
      scriptElement.parentElement.removeChild(scriptElement);
    });
  }

  ngAfterViewInit() {}
}
