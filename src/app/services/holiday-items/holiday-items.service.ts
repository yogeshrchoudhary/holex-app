import { Injectable } from '@angular/core';
import { IHoliday } from '../../home/holiday.model';

@Injectable({
  providedIn: 'root'
})
export class HolidayItemsService {
  private holidays: IHoliday[] = [
    {
      title: 'Dorset',
      id: 1,
      date: new Date('2025-05-22'),
      description: 'Lulworth Cove, Dorset and the Jurassic Coast World Heritage Site'
    },
    {
      title: 'Cotswolds',
      id: 2,
      date: new Date('2025-03-10'),
      description: 'Lovely vilages of Bourton-on-the-Water, Cotswolds and Moreton-in-Marsh Market Town',
    }];

  getHolidays(): IHoliday[] {
    return this.holidays;
  }

  addTestHoliday() {
    var randomYear = Math.floor(Math.random() * (2028 - 2020 + 1)) + 2020;

    const newHoliday: IHoliday = {
      id: this.holidays.length + 1,
      date: new Date(randomYear, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28)),
      title: 'Random Holiday ' + (this.holidays.length + 1),
      description: 'Description of the new holiday ' + (this.holidays.length + 1),
    };
    this.holidays.push(newHoliday);
  }

  removeHoliday(holiday: IHoliday) {
    const index = this.holidays.findIndex(h => h.id === holiday.id);
    if (index > -1) {
      this.holidays.splice(index, 1);
    }
    console.log(`Holiday with ID ${holiday.id} deleted.`);
  }

}
