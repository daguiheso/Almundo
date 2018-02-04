import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelsComponent } from './hotels.component';

const hotelsRoutes: Routes = [{
  path: '',
  component: HotelsComponent,
  children: [
    {
      path: '',
      children: [ ]
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(hotelsRoutes)],
  exports: [RouterModule]
})

export class HotelsRoutingModule { }
