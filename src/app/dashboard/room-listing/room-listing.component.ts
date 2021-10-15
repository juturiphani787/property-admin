import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { CookieService } from 'src/app/services/cookie.service';
import { AppGlobals } from 'src/app/app.globals';

@Component({
  selector: 'app-room-listing',
  templateUrl: './room-listing.component.html',
  styleUrls: ['./room-listing.component.scss']
})
export class RoomListingComponent implements OnInit {
  listRooms: any = [];
  userInfo: any;
  property:any;

  constructor(
    private cookieService: CookieService,
    private http: HttpService,
    private appGlobals: AppGlobals) { }

  ngOnInit(): void {
    this.listRooms = [];
    this.userInfo = JSON.parse(this.cookieService.get('loginData'));
    this.cookieService.delete('room');
    if(this.cookieService.get('property')) {
      this.property = JSON.parse(this.cookieService.get('property'));
      this.listPropertyRooms();  
    }
    
  }

  listPropertyRooms() {
    let postData = {
      userId: this.userInfo._id,
      propertyId:this.property._id
    }
    this.http.postRequest(this.appGlobals.urls.listPropertyRooms, postData).subscribe((resp: any) => {
      let data = resp.response.data;
      this.listRooms = data;
    }, error => {

    })
  }

}
