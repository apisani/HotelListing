import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { RatingComponent } from './components/rating/rating.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { HotelService } from './services/hotel.service';

// 3rd Party
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    HotelComponent,
    RatingComponent
  ],
  imports: [
    DataViewModule,
    DropdownModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'hotel', component: HotelComponent },
    ])
  ],
  providers: [
  HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
