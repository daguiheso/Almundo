import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';

import { HotelsRoutingModule } from './hotels-routing.module';
import { HotelsComponent } from './hotels.component';
import { HotelFilterComponent } from './hotel-filter/hotel-filter.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelsService } from './services/hotels.service';

@NgModule({
  imports: [
    CommonModule,
    HotelsRoutingModule,
    HttpClientModule
  ],
  declarations: [HotelFilterComponent, HotelListComponent, HotelsComponent],
  providers: [HotelsService]
})
export class HotelsModule { }
