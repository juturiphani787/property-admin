import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsViewComponent } from './bookings-view/bookings-view.component';
import { BookingsComponent } from './bookings.component';


const routes: Routes = [
  {
    path: '',
    children:[
      {
        path:'',
        component: BookingsComponent,
      },
      {
        path:'view',
        component: BookingsViewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingsRoutingModule { }

