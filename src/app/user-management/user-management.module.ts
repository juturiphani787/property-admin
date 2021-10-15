import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserManagementComponent } from './user-management.component';
import { SharedModule } from "../shared/shared.module";
import { GuestUsersComponent } from './guest-users/guest-users.component';
import { RegisteredUsersComponent } from './registered-users/registered-users.component';
import { ViewUserComponent } from './view-user/view-user.component';

@NgModule({
  declarations: [
    UserManagementComponent,
    GuestUsersComponent,
    RegisteredUsersComponent,
    ViewUserComponent,  
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserManagementRoutingModule,
    TabsModule,
  ]
})
export class UserManagementModule { }
