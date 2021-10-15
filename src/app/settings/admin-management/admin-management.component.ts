import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-management',
  templateUrl: './admin-management.component.html',
  styleUrls: ['./admin-management.component.scss']
})
export class AdminManagementComponent implements OnInit {

  showAddRoleBtn:Boolean = true;
  showAddAdminBtn:Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeTab(event:any, tab:any) {
    if(tab == 1) {
      this.showAddAdminBtn = false;
      this.showAddRoleBtn = true;
    }else {
      this.showAddAdminBtn = true;
      this.showAddRoleBtn = false;
    }
  }

}
