import { Day } from './day.model';

export class Week {
    days: Day[] = [];

    constructor() {}

    addDay(day: Day) {
        this.days.push(day);
    }
}
