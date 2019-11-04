import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiWidgetComponent } from './ui-widget.component';

describe('UiWidgetComponent', () => {
  let component: UiWidgetComponent;
  let fixture: ComponentFixture<UiWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
