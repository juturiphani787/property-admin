import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SettingsComponent } from './settings.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { RouterModule } from '@angular/router';
import { SettingsRoutingModule } from './settings.routing.module';
import { AdminManagementComponent } from './admin-management/admin-management.component';
import { SubscribersComponent } from './subscribers/subscribers.component';
import { MailSubscribersComponent } from './mail-subscribers/mail-subscribers.component';
import { RolePermissionListComponent } from './admin-management/role-permission-list/role-permission-list.component'
import { RolePermissionAddComponent } from './admin-management/role-permission-add/role-permission-add.component'
import { AdminUsersComponent } from './admin-management/admin-users/admin-users.component';


@NgModule({
  declarations: [
    SettingsComponent,
    AdminManagementComponent,
    RolePermissionListComponent,
    RolePermissionAddComponent,
    SubscribersComponent,
    MailSubscribersComponent,
    AdminUsersComponent
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    SettingsRoutingModule,
    TabsModule,
    RouterModule
  ]
})
export class SettingsModule { }
