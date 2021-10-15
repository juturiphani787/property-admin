import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  showRoomsTab: Boolean = false;
  public activeTab: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params.room == 1) {
        this.showRoomsTab = true;
      }
      console.log(params);
    });
  }

  changeTab(event: any) {
    this.activeTab = event.heading;
  }

}
