import { Component, OnInit } from '@angular/core';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap/popover/popover';
import { ViewChild } from '@angular/core';
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap/popover/popover-config';
import { NgCompactCalendarDayComponent } from './ng-compact-calendar-day.component';
import { CalendarOverviewEvent } from './calendaroverviewevent.model';
import { Category } from './category.model';
import { Day } from './day.model';
import { Week } from './week.model';
import * as moment_ from 'moment';

const moment = moment_;


@Component({
    selector: 'ng-compact-calendar',
    templateUrl: './ng-compact-calendar.component.html',
    styleUrls: [
        'ng-compact-calendar.css'
    ]
})
export class NgCompactCalendarComponent implements OnInit {

    today: moment_.Moment;
    current: moment_.Moment;

    title: string;
    // headerElement: HTMLElementTagNameMap = null;
    // private next: boolean;

    weeks: Week[];
    categories: Category[];

    events: CalendarOverviewEvent[] = [];
    day = {};

    @ViewChild('p') public popover: NgbPopover;

    constructor(private popoverConfig: NgbPopoverConfig
    ) {
        this.today = moment();
        this.current = moment().date(1);

        this.popoverConfig.triggers = 'manual';
        this.popoverConfig.container = 'body';
        // const current = document.querySelector('.today');
        // if(current) {
        //   window.setTimeout(function() {
        //     openDay(current);
        //   }, 500);
        // }
    }

    ngOnInit() {
        this.events.push(new CalendarOverviewEvent(new Date(), 'Ontbijt', 'private', 'green'));
        this.events.push(new CalendarOverviewEvent(new Date(), 'Douchen', 'private', 'green'));
        this.events.push(new CalendarOverviewEvent(new Date(), 'Van de zon genieten', 'private', 'green'));
        this.events.push(new CalendarOverviewEvent(new Date(), 'work on app', 'work', 'blue'));
        this.events.push(new CalendarOverviewEvent(new Date(), 'Eten bij Sas', 'private', 'green'));
        this.events.push(new CalendarOverviewEvent(new Date(), 'Offerte Walkabout App', 'important', 'red'));
        this.events.push(new CalendarOverviewEvent(new Date(), 'Email Arjan GDRP', 'important', 'red'));
        this.categories = [];
        this.categories.push(new Category('Work', 'blue'));
        this.categories.push(new Category('Private', 'green'));
        this.categories.push(new Category('Important', 'red'));
        this.updateView();
    }

    private updateView() {
        this.title = this.current.format('MMMM YYYY');
        this.weeks = [];
        const date = this.current.clone();
        const dayOfWeek = date.day();
        if (dayOfWeek) {
            date.subtract(dayOfWeek + 1, 'days');
        }

        while (date.month() <= this.current.month()) {
            const week: Week = new Week();
            for (let i = 0; i < 7; i++) {
                const day: Day = new Day(date.clone());
                this.addEventsToDay(day);
                week.addDay(day);
                date.add(1, 'days');
            }
            this.weeks.push(week);
        }
    }

    private addEventsToDay(day: Day) {
        this.events.forEach((event: CalendarOverviewEvent) => {
            if (moment(event.date).isSame(day.date, 'day')) {
                day.addEvent(event);
            }
        });
    }

    public showDay(dayToShow: Day): void {
        const isOpen = this.popover.isOpen();
        this.popover.close();

        if (dayToShow !== this.day || !isOpen) {
            this.day = dayToShow;
            this.popover.popoverTitle = dayToShow.dayName + ' ' + dayToShow.dayNumber + ' ' + dayToShow.monthName;
            this.popover.open({day: dayToShow});
        }
    }

    nextMonth() {
        this.current.add(1, 'months');
        // this.next = true;
        this.updateView();
    }

    prevMonth() {
        this.current.subtract(1, 'months');
        // this.next = false;
        this.updateView();
    }
}
