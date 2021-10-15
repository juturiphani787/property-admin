import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuItems: any[] = [
    { url: '/dashboard', icon: 'assets/icons/dashboard.svg' },
    { url: '/manage-user', icon: 'assets/icons/user.svg' },
    { url: '/bookings', icon: 'assets/icons/report.svg' },
    // { url: '/email', icon: 'assets/icons/channel.svg' },
    //{ url: '/mapping', icon: 'assets/icons/mapping.svg' },
    { url: '/settings/subscribers', icon: 'assets/icons/edit.svg' },
    //{ url: '/reports', icon: 'assets/icons/report.svg' },
    // { url: '/campaign', icon: 'assets/icons/campaign.svg' },
    //{ url: '/config', icon: 'assets/icons/license.svg' }
  ]

  constructor(
    public router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  navigateTo(url?:any) {
    this.router.navigate([url]);
  }

  isMenuItemActive(url: any) {
    let _url = this.router.url.replace('/', '').split('/')[0];
    return url.match(_url);
  }

}
