import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-widget-video-stream',
  templateUrl: './widget-video-stream.component.html',
  styleUrls: ['./widget-video-stream.component.scss']
})
export class WidgetVideoStreamComponent implements OnInit {

  public value;
  public hostname;

  @Input('loads')
  set loads(value) {
    this.value = value;
  }

  constructor() {
    const {hostname} = window.location;
    this.hostname = hostname;
  }

  ngOnInit() {
  }

}
