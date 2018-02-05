import { Component, OnInit } from '@angular/core';
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { HotelsService } from '../services/hotels.service';
import { Hotel } from '../models/hotels.models';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {

  loading = false;
  hotels: Hotel[] = [];

  constructor(
    private hotelsService: HotelsService
  ) {
    this.loading = true;
  }

  ngOnInit() {
    this.hotelsService.getHotels()
      .subscribe(res => {
        this.loading = false;
        this.hotels = res.body;
      }, error => {
        this.loading = false;
        debugger
      })
  }

  sendData(data: Hotel[]) {
    this.hotels = data;
  }

  validateStars(hotel: Hotel, spectative: number) {
    if (hotel.stars === spectative) return true
    else return false
  }

}


