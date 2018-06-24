import { CalendarOverviewEvent } from './calendaroverviewevent.model';
import { Moment } from 'moment';

export class Day {
    dayName: string;
    dayNumber: string;
    monthName: string;

    events: CalendarOverviewEvent[] = [];

    constructor(public date: Moment) {
        this.dayName = date.format('ddd');
        this.dayNumber = date.format('DD');
        this.monthName = date.format('MMM');
    }

    addEvent(event: CalendarOverviewEvent) {
        this.events.push(event);
    }
}
