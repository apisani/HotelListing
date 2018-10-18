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
import { HotelService } from './services/hotel/hotel.service';
import { ToastyWrapperService } from './services/toastywrapper/toasty-wrapper.service';

// 3rd Party
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/primeng';
import { ToastyModule } from 'ng2-toasty';

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
    ToastyModule.forRoot(),
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
  HotelService, ToastyWrapperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
