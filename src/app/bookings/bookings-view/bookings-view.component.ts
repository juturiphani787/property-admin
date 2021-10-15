import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { CookieService } from 'src/app/services/cookie.service';
import { AppGlobals } from 'src/app/app.globals';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-bookings-view',
  templateUrl: './bookings-view.component.html',
  styleUrls: ['./bookings-view.component.scss']
})
export class BookingsViewComponent implements OnInit {

  userInfo:any;
  booking:any;

  constructor(
    private cookieService:CookieService,
    private http:HttpService,
    private appGlobals:AppGlobals,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.userInfo = JSON.parse(this.cookieService.get('loginData'));
    if(this.cookieService.get('booking')) {
      this.booking = JSON.parse(this.cookieService.get('booking'));
    }
    
  }

}
