import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Hotel } from '../models/hotels.models';
import { HotelsService } from '../services/hotels.service';

@Component({
  selector: 'app-hotel-filter',
  templateUrl: './hotel-filter.component.html',
  styleUrls: ['./hotel-filter.component.scss']
})
export class HotelFilterComponent implements OnInit {

  @Output() shareDataEvent = new EventEmitter();
  hotels: Hotel;
  queryName: {};

  constructor(private hotelsService: HotelsService) { }

  ngOnInit() { }

  searchHotels() {
    let options = { name: 'name', query: this.queryName}
    this.hotelsService.getHotels(options)
      .subscribe(res => {
        this.hotels = res.body;
        this.shareDataEvent.emit(this.hotels);
      }, error => {
        debugger
      });
  }
}
