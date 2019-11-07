import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-widget-memory',
  templateUrl: './widget-memory.component.html',
  styleUrls: ['./widget-memory.component.scss']
})
export class WidgetMemoryComponent implements OnInit {

  public value;

  @Input('memory')
  set memory(value) {
    this.value = value;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
