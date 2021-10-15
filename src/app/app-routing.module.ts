import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: 'login', component: LoginComponent
      }
    ]
  },
  {
    path: '',
    component: LayoutComponent,
    //canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule)
      },
      {
        path: 'manage-user', loadChildren: () => import('./user-management/user-management.module').then(mod => mod.UserManagementModule)
      },
      {
        path: 'bookings', loadChildren: () => import('./bookings/bookings.module').then(mod => mod.BookingsModule)
      },
      {
        path: 'settings', loadChildren: () => import('./settings/settings.module').then(mod => mod.SettingsModule)
      },

      // {
      //   path: 'email', component: LoginComponent
      // },
      // {
      //   path: 'mapping', loadChildren: () => import('./mapping/mapping.module').then(mod => mod.MappingModule)
      // },
      
      {
        path: 'reports', loadChildren: () => import('./reports/reports.module').then(mod => mod.ReportsModule)
      },

      // {
      //   path: 'settings', loadChildren: () => import('./settings/settings.module').then(mod => mod.SettingsModule)
      // },

      // {
      //   path: 'config', loadChildren: () => import('./configurations/configurations.module').then(mod => mod.ConfigurationsModule)
      // },
      // {
      //   path: 'campaign', loadChildren: () => import('./campaign/campaign.module').then(mod => mod.CampaignModule)
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
