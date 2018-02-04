import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { RouterModule, Route } from '@angular/router';

import { HotelsRoutingModule } from './hotels-routing.module';
import { HotelsComponent } from './hotels.component';
import { HotelFilterComponent } from './hotel-filter/hotel-filter.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';

@NgModule({
  imports: [
    CommonModule,
    HotelsRoutingModule
  ],
  declarations: [HotelFilterComponent, HotelListComponent, HotelsComponent]
})
export class HotelsModule { }
