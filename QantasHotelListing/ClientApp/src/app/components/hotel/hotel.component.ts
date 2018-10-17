import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../../models/hotel';
import { HotelService } from '../../services/hotel.service'
import { SelectItem } from 'primeng/components/common/selectitem';


@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  public hotelCount: number;
  public hotelLocation: string = "Sydney";
  public hotels: Hotel[] = [];
  public sortOptions: SelectItem[];
  public sortKey: string;
  public sortField: string;
  public sortOrder: number;
  public ratingClicked: number;
  public itemIdRatingClicked: string;


  constructor(private hotelService: HotelService) { }

  ngOnInit() {
    this.sortOptions = [
      { label: 'Highest Price', value: '!price' },
      { label: 'Lowest Price', value: 'price' }
    ];

    this.getAllHotels();

  }

  getAllHotels() {
    this.hotelService.GetAllHotels().subscribe(result => {
      this.hotels = result;
      this.hotelCount = this.hotels.length;

    }, error => console.error(error));
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  ratingComponentClick(clickObj: any): void {
    const item = this.hotels.find(((i: any) => i.id === clickObj.itemId));
    if (!!item) {
      item.Rating = clickObj.rating;
      this.ratingClicked = clickObj.rating;
      this.itemIdRatingClicked = item.Id;
    }
  }
}
