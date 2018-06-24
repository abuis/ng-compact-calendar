import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgCompactCalendarComponent } from './ng-compact-calendar.component';
import { NgCompactCalendarDayComponent } from './ng-compact-calendar-day.component';

@NgModule({
    imports: [CommonModule, NgbModule.forRoot()],
    declarations: [
      NgCompactCalendarComponent,
      NgCompactCalendarDayComponent,
    ],
    exports: [
      NgCompactCalendarComponent,
      NgCompactCalendarDayComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class NgCompactCalendarModule { }
