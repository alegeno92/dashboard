import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-widget-processor',
  templateUrl: './widget-processor.component.html',
  styleUrls: ['./widget-processor.component.scss']
})
export class WidgetProcessorComponent implements OnInit {

  public value;

  @Input('loads')
  set loads(value) {
    this.value = value;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
