import { Component, OnInit } from '@angular/core';
import { IHoliday } from '../models/holiday.model';
import { CommonModule } from '@angular/common';
import { HolidayItemComponent } from "../holiday-item/holiday-item.component";
import { HolidayItemsService } from '../services/holiday-items/holiday-items.service';
import { map } from 'rxjs';

@Component({
  selector: 'hol-home',
  standalone: true,
  imports: [CommonModule, HolidayItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  holidays: IHoliday[] = [];

  constructor(private holidayItemsService: HolidayItemsService) { }

  ngOnInit(): void {
    this.updateHolidays();
  }

  private updateHolidays() {
    this.holidayItemsService.fetch()
      .subscribe(data => {
        this.holidays = data;
    });
  }

  addRandomHoliday(): void {
    this.holidayItemsService.createTestHoliday();
    this.holidays = this.holidayItemsService.getHolidays();
  }

  onHolidayDelete(holiday: IHoliday) {
    this.holidayItemsService.removeHoliday(holiday);
    this.holidays = this.holidayItemsService.getHolidays();
  }
}
