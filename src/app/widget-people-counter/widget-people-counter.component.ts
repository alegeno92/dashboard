import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-widget-people-counter',
  templateUrl: './widget-people-counter.component.html',
  styleUrls: ['./widget-people-counter.component.scss']
})
export class WidgetPeopleCounterComponent implements OnInit {
  public value;

  @Input('people')
  set people(value) {
    this.value = value;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
