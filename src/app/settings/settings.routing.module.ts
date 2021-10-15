import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminManagementComponent } from './admin-management/admin-management.component';
import { RolePermissionAddComponent } from './admin-management/role-permission-add/role-permission-add.component';
import { MailSubscribersComponent } from './mail-subscribers/mail-subscribers.component';
import { SettingsComponent } from './settings.component';
import { SubscribersComponent } from './subscribers/subscribers.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children: [
      {
        path: 'admin-management', component: AdminManagementComponent
      },
      {
        path: 'subscribers', component: SubscribersComponent
      },
      {
        path: 'mail-subscribers', component: MailSubscribersComponent
      },
      {
        path: 'add-role', component: RolePermissionAddComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
