import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  activeReport: any;
  reports_list: any[] = [
    {
      name: 'WFH Report',
      url: 'wfh'
    },
    {
      name: 'Live Chat Reports',
      url: 'livechat'
    },
    {
      name: 'Video Call Reports',
      url: 'war'
    },
    {
      name: 'Co-Browse Reports',
      url: 'cobrowse'
    },
    {
      name: 'Whatsapp Reports',
      url: 'war'
    },
    {
      name: 'Agent Reports',
      url: 'agents'
    }
  ]

  ngOnInit(): void {
  }

  isActiveRoute(url: any) {
    return this.router.url.replace('/', '').split('/')[1] == url;
  }

}
