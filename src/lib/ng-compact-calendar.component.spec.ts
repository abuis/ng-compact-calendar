import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCompactCalendarComponent } from './ng-compact-calendar.component';

describe('NgCompactCalendarComponent', () => {
  let component: NgCompactCalendarComponent;
  let fixture: ComponentFixture<NgCompactCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgCompactCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCompactCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
