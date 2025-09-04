import { Injectable } from '@angular/core';
import { IHoliday, IHolidayResponse } from '../../models/holiday.model';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HolidayItemsService {
  private holidays: IHoliday[] = [];
  constructor(private http: HttpClient) { }

  private API_URL: string = '/api/v1/holiday-items';

  fetch(): Observable<IHoliday[]> {
    let httpResponseObservable = this.http.get<IHolidayResponse[]>(this.API_URL);

    // Transform the response to match IHoliday interface
    let result = httpResponseObservable.pipe<IHoliday[]>( map((data: IHolidayResponse[]) => {
                                                            var holidays: IHoliday[] = data.map(item => ({
                                                              id: item.Id,
                                                              date: new Date(item.Date),
                                                              title: item.Name,
                                                              description: item.Description
                                                            }));
                                                            return holidays;
                                                          })); 
                                                              
    return result;
  }

  getHolidays(): IHoliday[] {
    return this.holidays;
  }

  createTestHoliday(): Observable<IHoliday> {
    var randomYear = Math.floor(Math.random() * (2028 - 2020 + 1)) + 2020;

    const newHoliday: IHoliday = {
      id: this.holidays.length + 1,
      date: new Date(randomYear, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28)),
      title: 'Random Holiday ' + (this.holidays.length + 1),
      description: 'Description of the new holiday ' + (this.holidays.length + 1),
    };
    this.holidays.push(newHoliday);

    // DOESN'T WORK - BACKEND NOT IMPLEMENTED YET
    return this.http.post<IHoliday>(this.API_URL, newHoliday);
  }

  removeHoliday(holiday: IHoliday): void {
    const index = this.holidays.findIndex(h => h.id === holiday.id);
    if (index > -1) {
      this.holidays.splice(index, 1);
    }
    console.log(`Holiday with ID ${holiday.id} deleted.`);
  }

}
