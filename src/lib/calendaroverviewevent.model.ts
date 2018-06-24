export class CalendarOverviewEvent {
    constructor(
        public date: Date,
        public name: string,
        public calendar?: string,
        public color?: string,
    ) {
    }
}
