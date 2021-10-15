import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestUsersComponent } from './guest-users/guest-users.component';
import { RegisteredUsersComponent } from './registered-users/registered-users.component';
import { UserManagementComponent } from './user-management.component';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [
  {
    path: '', component: UserManagementComponent
  },
  {
    path: 'guest-users', component: GuestUsersComponent
  },
  {
    path: 'registered-users', component: RegisteredUsersComponent
  },
  {
    path: 'view-user', component: ViewUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
