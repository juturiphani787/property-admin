import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { CookieService } from 'src/app/services/cookie.service';
import { AppGlobals } from 'src/app/app.globals';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  userBookings: any;

  @Input() userData:any;
  userInfo: any;
  constructor(
    private cookieService:CookieService,
    private http:HttpService,
    private appGlobals:AppGlobals,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.userInfo = JSON.parse(this.cookieService.get('loginData'));
    this.listUserBookings();
  }

  listUserBookings() {
    let postData = {
      userId: this.userInfo._id
    }
    this.http.postRequest(this.appGlobals.urls.listUserBookings, postData).subscribe((resp:any) => {
      let data = resp.response.data;
      this.userBookings = data;
    }, error => {
      
    })
  }

  editProperty(property:any) {
    this.cookieService.set('property', JSON.stringify(property));
    this.router.navigate(['/dashboard/add-property']);
  }

}
