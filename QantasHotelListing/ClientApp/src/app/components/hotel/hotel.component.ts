import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../../models/hotel';
import { HotelService } from '../../services/hotel/hotel.service';
import { ToastyWrapperService } from '../../services/toastywrapper/toasty-wrapper.service';
import { SelectItem } from 'primeng/components/common/selectitem';


@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  hotelCount: number;
  hotelLocation = 'Sydney';
  hotels: Hotel[] = [];
  sortOptions: SelectItem[];
  sortKey: string;
  sortField: string;
  sortOrder: number;
  ratingClicked: number;
  itemIdRatingClicked: string;
  hotelLoaded = false;


  constructor(private hotelService: HotelService, private toastyService: ToastyWrapperService) {}

  ngOnInit() {
    this.sortOptions = [
      { label: 'Highest Price', value: '!price' },
      { label: 'Lowest Price', value: 'price' }
    ];

    this.getAllHotels();
  }

  getAllHotels() {
    this.hotelService.GetAllHotels().subscribe(result => {
      this.toastyService.success('Hotel list was succesfuly loaded');
      this.hotels = result;
      this.hotelCount = this.hotels.length;
  }, error => {
      this.toastyService.error('There was an error uploading the hotel list');
  });
  this.hotelLoaded = true;
 }

  onSortChange(event) {
    const value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  // Started to implement click functionality, but ran out of time
  ratingComponentClick(clickObj: any): void {
    const item = this.hotels.find(((i: any) => i.id === clickObj.itemId));
    if (!!item) {
      item.Rating = clickObj.rating;
      this.ratingClicked = clickObj.rating;
      this.itemIdRatingClicked = item.Id;
    }
  }
}
