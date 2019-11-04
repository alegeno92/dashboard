import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetMemoryComponent } from './widget-memory.component';

describe('WidgetMemoryComponent', () => {
  let component: WidgetMemoryComponent;
  let fixture: ComponentFixture<WidgetMemoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetMemoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetMemoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
