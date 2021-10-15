import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AllListingComponent } from './all-listing/all-listing.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { PropertyViewComponent } from './property-view/property-view.component';
import { RoomListingComponent } from './room-listing/room-listing.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { RoomViewComponent } from './room-view/room-view.component';
import { FeaturesComponent } from './features/features.component';
import { RoomFeaturesComponent } from './room-features/room-features.component';
import { ReviewsRatingsComponent } from './reviews-ratings/reviews-ratings.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AllListingComponent,
    AddPropertyComponent,
    PropertyDetailsComponent,
    PropertyViewComponent,
    RoomListingComponent,
    AddRoomComponent,
    RoomDetailsComponent,
    RoomViewComponent,
    FeaturesComponent,
    RoomFeaturesComponent,
    ReviewsRatingsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    TabsModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DashboardModule { }
