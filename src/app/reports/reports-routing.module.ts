import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsComponent } from './reports.component';
import { WfhReportsComponent } from './wfh-reports/wfh-reports.component';
import { LiveChatReportsComponent } from './live-chat-reports/live-chat-reports.component';
import { CobrowseReportsComponent } from './cobrowse-reports/cobrowse-reports.component';
import { AgentReportsComponent } from './agent-reports/agent-reports.component';

const routes: Routes = [
  {
    path: '',
    component: ReportsComponent,
    children: [
      {
        path: 'wfh', component: WfhReportsComponent
      },
      {
        path: 'livechat', component: LiveChatReportsComponent
      },
      {
        path: 'cobrowse', component: CobrowseReportsComponent
      },
      {
        path: 'agents', component: AgentReportsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
