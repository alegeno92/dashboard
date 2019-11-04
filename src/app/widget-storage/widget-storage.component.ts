import {Component, Input, OnInit} from '@angular/core';
import {Storage} from '../data-models/storage';

@Component({
  selector: 'app-widget-storage',
  templateUrl: './widget-storage.component.html',
  styleUrls: ['./widget-storage.component.scss']
})
export class WidgetStorageComponent implements OnInit {

  @Input() storage: Storage = {
    total: 100,
    free: 100
  };

  constructor() {
  }

  ngOnInit() {
  }

}
