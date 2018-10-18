import { TestBed, inject } from '@angular/core/testing';

import { HotelService } from './hotel.service';

describe('HotelService', () => {

    const service = new HotelService(undefined, undefined);
 beforeEach(() => {
   TestBed.configureTestingModule({
     providers: [HotelService]
   });
 });

 it('Should create', () => {
    expect(service).toBeTruthy();
  });
});
