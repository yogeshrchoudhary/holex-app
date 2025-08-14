import { Component } from '@angular/core';
import { IHoliday } from '../models/holiday.model';
import { CommonModule } from '@angular/common';
import { HolidayItemComponent } from "../holiday-item/holiday-item.component";
import { HolidayItemsService } from '../services/holiday-items/holiday-items.service';

@Component({
  selector: 'hol-home',
  standalone: true,
  imports: [CommonModule, HolidayItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private _holidayItemsService: HolidayItemsService;

  holidays: IHoliday[];

  constructor(holidayItemsService: HolidayItemsService) {
    this._holidayItemsService = holidayItemsService;
    this.holidays = this._holidayItemsService.getHolidays();
  }

  addRandomHoliday(): void {
    this._holidayItemsService.addTestHoliday();
    this.holidays = this._holidayItemsService.getHolidays();
  }

  onHolidayDelete(holiday: IHoliday) {
    this._holidayItemsService.removeHoliday(holiday);
    this.holidays = this._holidayItemsService.getHolidays();
  }
}
