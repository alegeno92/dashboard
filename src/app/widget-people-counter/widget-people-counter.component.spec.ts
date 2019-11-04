import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetPeopleCounterComponent } from './widget-people-counter.component';

describe('WidgetPeopleCounterComponent', () => {
  let component: WidgetPeopleCounterComponent;
  let fixture: ComponentFixture<WidgetPeopleCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetPeopleCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetPeopleCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
