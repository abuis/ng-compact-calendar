import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCompactCalendarDayComponent } from './ng-compact-calendar-day.component';

describe('NgCompactCalendarDayComponent', () => {
  let component: NgCompactCalendarDayComponent;
  let fixture: ComponentFixture<NgCompactCalendarDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgCompactCalendarDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCompactCalendarDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
