import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { WfhReportsComponent } from './wfh-reports/wfh-reports.component';
import { SharedModule } from '../shared/shared.module';
import { LiveChatReportsComponent } from './live-chat-reports/live-chat-reports.component';
import { CobrowseReportsComponent } from './cobrowse-reports/cobrowse-reports.component';
import { AgentReportsComponent } from './agent-reports/agent-reports.component';

@NgModule({
  declarations: [
    ReportsComponent,
    WfhReportsComponent,
    LiveChatReportsComponent,
    CobrowseReportsComponent,
    AgentReportsComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    SharedModule
  ]
})
export class ReportsModule { }
