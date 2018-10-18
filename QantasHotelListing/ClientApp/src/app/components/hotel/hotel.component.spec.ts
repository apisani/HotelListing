// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelComponent } from './hotel.component';
import { HotelService } from '../../services/hotel/hotel.service';
import { ToastyWrapperService } from '../../services/toastywrapper/toasty-wrapper.service';

import { of } from 'rxjs/observable/of';
import { Hotel } from '../../../models/hotel';

import { ToastyService, ToastyConfig } from 'ng2-toasty';

describe('HotelComponent', () => {
  let component: HotelComponent;
  // let fixture: ComponentFixture<HotelComponent>;
  let hotelService: HotelService;
  let toastyWrapperService: ToastyWrapperService;
  // let serviceStub: any;
  let toastyService: ToastyService;
  let toastyConfig: ToastyConfig;

  // Set up ToastyWrapperService
  toastyConfig = new ToastyConfig();
  toastyService = new ToastyService(toastyConfig);
  toastyWrapperService = new ToastyWrapperService(toastyService, toastyConfig);

  // Set up data for Hotel components / service (stub)
  const hotel1 = new Hotel(
    'cxd650nuyo', 'Courtyard by Marriott Sydney-North Ryde', '7-11 Talavera Rd, North Ryde',
    'https://unsplash.it/145/125/?random', 4, 4, 'self', 'Exclusive Deal', 'Deluxe Balcony Room',
    329, 30, true, null);

  const hotel2 = new Hotel(
    'kwjf8jlxg9', 'Metro Hotel Marlow Sydney Central', '431-439 Pitt Street, Sydney',
    'https://unsplash.it/145/125/?random', 3.5, 3, 'star', 'Bonus Points', 'Deluxe Triple',
    295, 0, true, null);

  const hotelList: Hotel[] = [];
  hotelList.push(hotel1);
  hotelList.push(hotel2);

  // Work around explained in comment block below (end of the document)
  hotelService = new HotelService(undefined, undefined);
  component = new HotelComponent(hotelService, toastyWrapperService);

  // Arrange
  hotelService.GetAllHotels = () => of(hotelList);
  component.ngOnInit();

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Hotel list should be defined', () => {
    expect(component.hotels).toBeDefined();
  });

  it('Should get the hotels', () => {
    expect(component.hotels).toEqual(hotelList);
  });

  it('Should get two hotel item in list', () => {
    expect(component.hotels.length).toEqual(2);
  });

  it('Should get two hotel item in list', () => {
    expect(component.hotels.length).toEqual(2);
  });

  it('Hotel Ids should be correct', () => {
    expect(component.hotels[0].Id).toEqual('cxd650nuyo');
    expect(component.hotels[1].Id).toEqual('kwjf8jlxg9');
  });

  it('Hotel Titles should be correct', () => {
    expect(component.hotels[0].Title).toEqual('Courtyard by Marriott Sydney-North Ryde');
    expect(component.hotels[1].Title).toEqual('Metro Hotel Marlow Sydney Central');
  });

  it('Hotel Addresses should be correct', () => {
    expect(component.hotels[0].Address).toEqual('7-11 Talavera Rd, North Ryde');
    expect(component.hotels[1].Address).toEqual('431-439 Pitt Street, Sydney');
  });

  it('Hotel Rating should be correct', () => {
    expect(component.hotels[0].Rating).toEqual(4);
    expect(component.hotels[1].Rating).toEqual(3.5);
  });

  it('Hotel Rounded Rating should be correct', () => {
    expect(component.hotels[0].RoundedRating).toEqual(4);
    expect(component.hotels[1].RoundedRating).toEqual(3);
  });

  it('Hotel Image URL should be correct', () => {
    expect(component.hotels[0].Image).toEqual('https://unsplash.it/145/125/?random');
    expect(component.hotels[1].Image).toEqual('https://unsplash.it/145/125/?random');
  });

  it('Hotel Promotion should be correct', () => {
    expect(component.hotels[0].Promotion).toEqual('Exclusive Deal');
    expect(component.hotels[1].Promotion).toEqual('Bonus Points');
  });

  it('Hotel Rating Type should be correct', () => {
    expect(component.hotels[0].RatingType).toEqual('self');
    expect(component.hotels[1].RatingType).toEqual('star');
  });
});

// ------------ Note --------------------------
// Could not implement this more elegant and optimised testing code
// First time using Jasmine and Karma, due to the time constraint I found a work around to the service dependency
// ---------------------------------------------

// serviceStub = {
//   getContent: () => (hotelList)
// };

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [HotelComponent],
//       providers: [{ provide: HotelService, useValue: serviceStub }]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(HotelComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
