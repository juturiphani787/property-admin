import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPropertyComponent } from './add-property/add-property.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { DashboardComponent } from './dashboard.component';
import { FeaturesComponent } from './features/features.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { PropertyViewComponent } from './property-view/property-view.component';
import { ReviewsRatingsComponent } from './reviews-ratings/reviews-ratings.component';

const routes: Routes = [
  {
  path: '',
  children: [
    { path: '', component: DashboardComponent},
    { path: 'add-property', component: AddPropertyComponent},
    { path: 'add-room', component: AddRoomComponent},
    { path: 'property-details', component: PropertyDetailsComponent},
    { path: 'property-view', component: PropertyViewComponent},
    { path: 'property-features', component: FeaturesComponent},
    { path: 'reviews-ratings', component: ReviewsRatingsComponent},
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
