import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationsComponent } from "./configurations.component";
import { ViolationConfigComponent } from './violation-config/violation-config.component';
import { CobrowseConfigComponent } from './cobrowse-config/cobrowse-config.component';

const routes: Routes = [
  {
    path: '', component: ConfigurationsComponent
  },
  {
    path: 'wfh', component: ViolationConfigComponent
  },
  {
    path: 'cobrowse', component: CobrowseConfigComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationsRoutingModule { }
