import { Component, OnInit } from '@angular/core';
import { NgbPopover, NgbPopoverWindow } from '@ng-bootstrap/ng-bootstrap/popover/popover';
import { ViewChild } from '@angular/core';
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap/popover/popover-config';
import { Input } from '@angular/core';
import { Day } from './day.model';
import { ComponentRef } from '@angular/core';
import { HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
    selector: 'ng-compact-calendar-day',
    templateUrl: './ng-compact-calendar-day.component.html',
    styleUrls: [
        'ng-compact-calendar-day.css'
    ]
})
export class NgCompactCalendarDayComponent implements OnInit {
    @Input() day: Day;

    @ViewChild('p') public popover: NgbPopover;

    constructor(
        private elementRef: ElementRef,
        private popoverConfig: NgbPopoverConfig
    ) {
        this.popoverConfig.triggers = 'manual';
        this.popoverConfig.container = 'body';
    }

    ngOnInit() {
    }

    public showDay(): void {
        const isOpen = this.popover.isOpen();
        this.popover.close();

        if (!isOpen) {
            this.popover.popoverTitle = this.day.dayName + ' ' + this.day.dayNumber + ' ' + this.day.monthName;
            this.popover.open({day: this.day});
        }
    }

    @HostListener('document:click', ['$event'])
    // tslint:disable-next-line
    private documentClicked(event: MouseEvent): void {

        // Popover is open
        if (this.popover.isOpen()) {

            // Not clicked on self element
            if (!this.elementRef.nativeElement.contains(event.target)) {

                // Hacking typescript to access private member
                const popoverWindowRef: ComponentRef<NgbPopoverWindow> = (this.popover as any)._windowRef;

                // If clicked outside popover window
                if (!popoverWindowRef.location.nativeElement.contains(event.target)) {
                    this.popover.close();
                }
            }
        }
    }
}
