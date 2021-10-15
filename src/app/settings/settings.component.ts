import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private router:Router) { }

  activeReport: any;
  reports_list: any[] = [
    {
      name: 'Subscribers',
      url: 'subscribers'
    }, 
    {
      name: 'Admin Management',
      url: 'admin-management'
    }
  ]

  ngOnInit(): void {
  }

  isActiveRoute(url: any) {
    return this.router.url.replace('/', '').split('/')[1] == url;
  }

}
