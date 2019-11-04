import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetProcessorComponent } from './widget-processor.component';

describe('WidgetProcessorComponent', () => {
  let component: WidgetProcessorComponent;
  let fixture: ComponentFixture<WidgetProcessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetProcessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetProcessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
