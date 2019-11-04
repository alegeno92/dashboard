import {Component, Input, OnInit} from '@angular/core';
import {People} from '../data-models/people';

@Component({
  selector: 'app-widget-people-counter',
  templateUrl: './widget-people-counter.component.html',
  styleUrls: ['./widget-people-counter.component.scss']
})
export class WidgetPeopleCounterComponent implements OnInit {

  @Input() people: People = {
    number: 100
  };

  constructor() {
  }

  ngOnInit() {
  }

}
