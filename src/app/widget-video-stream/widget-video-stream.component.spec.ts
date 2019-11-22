import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetVideoStreamComponent } from './widget-processor.component';

describe('WidgetProcessorComponent', () => {
  let component: WidgetVideoStreamComponent;
  let fixture: ComponentFixture<WidgetVideoStreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetVideoStreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetVideoStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
