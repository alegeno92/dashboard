import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiGaugeComponent } from './ui-gauge.component';

describe('UiGaugeComponent', () => {
  let component: UiGaugeComponent;
  let fixture: ComponentFixture<UiGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiGaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
