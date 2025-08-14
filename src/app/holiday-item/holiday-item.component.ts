import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IHoliday } from '../home/holiday.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hol-holiday-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './holiday-item.component.html',
  styleUrl: './holiday-item.component.css'
})
export class HolidayItemComponent {
  @Input() holidayItem!: IHoliday;
  @Output() deleteHoliday = new EventEmitter();

  generateLogoUrl(holiday: IHoliday): string {
    if (this.isHolidayInFuture(holiday)) {
      return `https://picsum.photos/seed/${holiday.date.getDay()}/75/75`;
    }
    else {
      return `images/holex-logo-1.jpg`;
    }
  }

  isHolidayInFuture(holiday: IHoliday): boolean {
    return (holiday.date > new Date(Date.now()));
  }

  getClassForDate(holiday: IHoliday): string[] {
    var currentDate = new Date(Date.now());
    if (holiday.date > currentDate) {
      return ['holiday-future', 'highlighted-date'];
    }
    return ['holiday-date'];
  }

  getStyleForDate(holiday: IHoliday): any {
    var color = "navy";
    if (holiday.date.getDay() === 0 || holiday.date.getDay() === 6) {
      color = "red"; // Highlight weekends in red
    } else if (holiday.date.getMonth() === 11 && holiday.date.getDate() === 25) {
      color = "green"; // Highlight Christmas in green
    }
    return { color: color, fontWeight: 'bolder' };
  }

  onHolidayDelete() {
    this.deleteHoliday.emit();
  }

}
