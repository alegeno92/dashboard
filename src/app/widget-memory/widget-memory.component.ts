import {Component, Input, OnInit} from '@angular/core';
import {Memory} from '../data-models/memory';

@Component({
  selector: 'app-widget-memory',
  templateUrl: './widget-memory.component.html',
  styleUrls: ['./widget-memory.component.scss']
})
export class WidgetMemoryComponent implements OnInit {

  @Input() memory: Memory = {
    free: 100,
    total: 100,
  };

  constructor() {
  }

  ngOnInit() {
  }

}
