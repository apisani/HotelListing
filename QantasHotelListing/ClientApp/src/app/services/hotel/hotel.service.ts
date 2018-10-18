import { Observable } from 'rxjs/Rx';
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Models
import { Hotel } from '../../../models/hotel';



@Injectable()
export class HotelService {
  private baseUrl: string;
  private http: HttpClient;


  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
    this.http = http;
  }

  GetAllHotels(): Observable<Hotel[]> {
    const url = this.baseUrl + 'api/Hotel/GetAllHotels';

    return this.http.get<Hotel[]>(url);
  }



}
