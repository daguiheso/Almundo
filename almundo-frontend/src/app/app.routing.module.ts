import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
	{
		path: 'hotels',
		loadChildren: './hotels/hotels.module#HotelModule',
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	],
	providers: []
})

export class AppRoutingModule { }
