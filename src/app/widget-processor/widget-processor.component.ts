import {Component, Input, OnInit} from '@angular/core';
import {Loads} from '../data-models/loads';

@Component({
  selector: 'app-widget-processor',
  templateUrl: './widget-processor.component.html',
  styleUrls: ['./widget-processor.component.scss']
})
export class WidgetProcessorComponent implements OnInit {

  @Input() loads: Loads = {
    free: 100,
    total: 100,
  };

  constructor() {
  }

  ngOnInit() {
  }

}
