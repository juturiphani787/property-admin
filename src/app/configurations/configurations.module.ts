import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";

import { ConfigurationsRoutingModule } from './configurations-routing.module';
import { ConfigurationsComponent } from "./configurations.component";
import { ViolationConfigComponent } from './violation-config/violation-config.component';
import { CobrowseConfigComponent } from './cobrowse-config/cobrowse-config.component';

@NgModule({
  declarations: [
    ConfigurationsComponent,
    ViolationConfigComponent,
    CobrowseConfigComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ConfigurationsRoutingModule
  ]
})
export class ConfigurationsModule { }
