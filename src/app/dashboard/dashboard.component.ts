import {Component} from '@angular/core';
import {map} from 'rxjs/operators';
import {Breakpoints, BreakpointObserver} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {ApplicationData} from '../data-models/application-data';
import {WebsocketService} from '../websocket.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  rowHeight = this.breakpointObserver
    .observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait,
      Breakpoints.Large,
      Breakpoints.Medium,
      Breakpoints.Small
    ])
    .pipe(
      map(({breakpoints}) => {
        if (breakpoints[Breakpoints.Small]) {
          return '38vh';
        }
        if (breakpoints[Breakpoints.Medium]) {
          return '39vh';
        }
        if (breakpoints[Breakpoints.Large]) {
          return '42vh';
        }
        return '37vh';
      })
    );

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({matches}) => {
      if (matches) {
        return [
          {code: 'PEOPLE_COUNTER', cols: 1, rows: 1},
          {code: 'VIDEO_STREAM', cols: 1, rows: 1},
          {code: 'MEMORY', cols: 1, rows: 1},
          {code: 'LOADS', cols: 1, rows: 1}
        ];
      }

      return [
        {code: 'PEOPLE_COUNTER', cols: 1, rows: 1},
        {code: 'VIDEO_STREAM', cols: 1, rows: 1},
        {code: 'MEMORY', cols: 1, rows: 1},
        {code: 'LOADS', cols: 1, rows: 1}
      ];
    })
  );
  data$: Observable<ApplicationData>;

  constructor(private breakpointObserver: BreakpointObserver, private websocketService: WebsocketService) {
    this.data$ = this.websocketService.connect();
  }
}
