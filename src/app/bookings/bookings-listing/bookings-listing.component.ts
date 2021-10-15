import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { CookieService } from 'src/app/services/cookie.service';
import { AppGlobals } from 'src/app/app.globals';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-bookings-listing',
  templateUrl: './bookings-listing.component.html',
  styleUrls: ['./bookings-listing.component.scss']
})
export class BookingsListingComponent implements OnInit {

  bookings:any = [];
  userInfo: any;

  constructor(
    private cookieService:CookieService,
    private http:HttpService,
    private appGlobals:AppGlobals,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.userInfo = JSON.parse(this.cookieService.get('loginData'));
    this.cookieService.delete('booking');
    this.listBookings();
  }

  listBookings() {
    let postData = {
      userId: this.userInfo._id
    }
    this.http.postRequest(this.appGlobals.urls.listBookings, postData).subscribe((resp:any) => {
      let data = resp.response.data;
      this.bookings = data;
    }, error => {
      
    })
  }

  editBooking(booking:any) {
    this.cookieService.set('booking', JSON.stringify(booking));
    this.router.navigate(['/bookings/view']);
  }

}
