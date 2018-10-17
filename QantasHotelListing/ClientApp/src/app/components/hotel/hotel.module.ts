import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { HotelComponent } from './hotel.component';

// 3rd Party
import { DataViewModule } from 'primeng/dataview';




@NgModule({
  imports: [
    CommonModule,
    DataViewModule
  ],
  declarations: [
    HotelComponent
  ]
})
export class HotelModule { }
