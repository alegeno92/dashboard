import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-ui-widget',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './ui-widget.component.html',
  styleUrls: ['./ui-widget.component.scss']
})
export class UiWidgetComponent implements OnInit {

  @Input() title = '';

  constructor() {
  }

  ngOnInit() {
  }

}
