import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-widget-storage',
  templateUrl: './widget-storage.component.html',
  styleUrls: ['./widget-storage.component.scss']
})
export class WidgetStorageComponent implements OnInit {

  public value;

  @Input('storage')
  set storage(value) {
    this.value = value;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
