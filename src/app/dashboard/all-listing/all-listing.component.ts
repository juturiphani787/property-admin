import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { CookieService } from 'src/app/services/cookie.service';
import { AppGlobals } from 'src/app/app.globals';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'all-listing',
  templateUrl: './all-listing.component.html',
  styleUrls: ['./all-listing.component.scss']
})
export class AllListingComponent implements OnInit {
  userInfo: any;
  listProperties:any = [];

  constructor(
    private cookieService:CookieService,
    private http:HttpService,
    private appGlobals:AppGlobals,
    private router:Router) { }

  ngOnInit(): void {
    this.userInfo = JSON.parse(this.cookieService.get('loginData'));
    this.cookieService.delete('property');
    this.listAllProperties();
  }

  listAllProperties() {
    let postData = {
      userId: this.userInfo._id
    }
    this.http.postRequest(this.appGlobals.urls.listAllProperties, postData).subscribe((resp:any) => {
      let data = resp.response.data;
      this.listProperties = data;
    }, error => {
      
    })
  }

  editProperty(property:any) {
    this.cookieService.set('property', JSON.stringify(property));
    this.router.navigate(['/dashboard/add-property']);
  }

}
