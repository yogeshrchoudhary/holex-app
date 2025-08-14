import { TestBed } from '@angular/core/testing';

import { HolidayItemsService } from './holiday-items.service';

describe('HolidayItemsService', () => {
  let service: HolidayItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HolidayItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
