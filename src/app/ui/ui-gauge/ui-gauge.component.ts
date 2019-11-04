import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-ui-gauge',
  templateUrl: './ui-gauge.component.html',
  styleUrls: ['./ui-gauge.component.scss']
})
export class UiGaugeComponent implements OnInit {
  @Input() value = 10;
  @Input() total = 100;

  @Input() label = 'Value';
  @Input() color = '#ff7211';
  @Input() bgColor = '#5bff50';

  size$: Observable<number>;

  constructor(breakpointObserver: BreakpointObserver) {
    this.size$ = breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large])
      .pipe(
        map((value1) => {
          if (value1.breakpoints[Breakpoints.XSmall]) {
            return 100;
          }
          if (value1.breakpoints[Breakpoints.Small]) {
            return 160;
          }
          if (value1.breakpoints[Breakpoints.Medium]) {
            return 200;
          }
          if (value1.breakpoints[Breakpoints.Large]) {
            return 220;
          }
        })
      );
  }

  ngOnInit() {
  }

}
