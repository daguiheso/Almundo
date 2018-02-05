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
  queryName: string;
  loading = false;

  selectedFilterStars = {
    allStars: false,
    fiveStars: false,
    fourStars: false,
    threeStars: false,
    twoStars: false,
    oneStars: false,
  }

  constructor(private hotelsService: HotelsService) { }

  ngOnInit() { }

  searchHotels() {
    this.loading = true;
    // Deselected filters checbok
    this.selectedFilterStars = {
      allStars: false,
      fiveStars: false,
      fourStars: false,
      threeStars: false,
      twoStars: false,
      oneStars: false,
    }

    let options = { name: 'name', query: this.queryName };
    this.hotelsService.getHotels(options)
      .subscribe(res => {
        this.hotels = res.body;
        this.loading = false;
        this.shareDataEvent.emit(this.hotels);
      }, error => {
        this.loading = false;
        debugger
      });
  }

  selectFilterChexboxStars() {
    this.loading = true;
    this.queryName = '';
    let options = { name: 'stars', query: '' };

    // Validation checbox selected
    if (this.selectedFilterStars.allStars) options.query = '5+4+3+2+1'
    else {
      if (this.selectedFilterStars.fiveStars) options.query += '5+'
      if (this.selectedFilterStars.fourStars) options.query += '4+'
      if (this.selectedFilterStars.threeStars) options.query += '3+'
      if (this.selectedFilterStars.twoStars) options.query += '2+'
      if (this.selectedFilterStars.oneStars) options.query += '1+'
    }

    // Call get hotels service
    this.hotelsService.getHotels(options)
      .subscribe(res => {
        this.hotels = res.body;
        this.loading = false;
        this.shareDataEvent.emit(this.hotels);
      }, error => {
        this.loading = false;
        debugger
      });

  }
}
