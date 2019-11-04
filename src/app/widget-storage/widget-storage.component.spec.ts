import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetStorageComponent } from './widget-storage.component';

describe('WidgetStorageComponent', () => {
  let component: WidgetStorageComponent;
  let fixture: ComponentFixture<WidgetStorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetStorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
