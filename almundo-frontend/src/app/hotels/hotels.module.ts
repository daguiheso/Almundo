import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoadingModule } from 'ngx-loading';

import { RouterModule, Route } from '@angular/router';

import { HotelsRoutingModule } from './hotels-routing.module';
import { HotelsComponent } from './hotels.component';
import { HotelFilterComponent } from './hotel-filter/hotel-filter.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelsService } from './services/hotels.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HotelsRoutingModule,
    HttpClientModule,
    LoadingModule.forRoot({
      backdropBackgroundColour: 'rgba(0,0,0,0.1)',
      primaryColour: '#ff4a07',
      secondaryColour: '#ff4a07',
      tertiaryColour: '#ff4a07',
      backdropBorderRadius: '0px'
    })
  ],
  declarations: [HotelFilterComponent, HotelListComponent, HotelsComponent],
  providers: [HotelsService]
})

export class HotelsModule { }
