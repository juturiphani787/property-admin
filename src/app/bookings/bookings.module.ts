import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { SharedModule } from "../shared/shared.module";
import { BookingsComponent } from './bookings.component';
import { BookingsListingComponent } from './bookings-listing/bookings-listing.component';
import { BookingsRoutingModule } from './bookings.routing.modules';
import { BookingsViewComponent } from './bookings-view/bookings-view.component';

@NgModule({
  declarations: [
    BookingsComponent,
    BookingsListingComponent,
    BookingsViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BookingsRoutingModule,
    TabsModule,
  ]
})
export class BookingsModule { }