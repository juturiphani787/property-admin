import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { CookieService } from 'src/app/services/cookie.service';
import { AppGlobals } from 'src/app/app.globals';
import { RoomDetailsComponent } from '../room-details/room-details.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.scss']
})
export class AddRoomComponent implements OnInit {

  @ViewChild(RoomDetailsComponent) roomDetailsComponent: RoomDetailsComponent;

  userInfo: any;
  edit: Boolean = false;
  room:any;
  property:any;

  constructor(
    private http: HttpService,
    private cookieService: CookieService,
    private appGlobals: AppGlobals,
    private router:Router) {
    this.userInfo = JSON.parse(this.cookieService.get('loginData'));
    this.property = JSON.parse(this.cookieService.get('property'));
    if(this.cookieService.get('room')) {
      this.room = JSON.parse(this.cookieService.get('room'));
      this.edit = true;
    }
  }

  ngOnInit(): void {
  }

  addRoom() {
    let roomDetailsForm = this.roomDetailsComponent.GetroomDetailsForm();
    let postData = {
      userId: this.userInfo.id,
      propertyId:this.property._id,
      roomDetails: roomDetailsForm.value
    }

    this.http.postRequest(this.appGlobals.urls.addRoom, postData).subscribe((resp: any) => {
      let data = resp.response.data;
      this.cookieService.set('room', JSON.stringify(data));
      this.room = data;
      
    }, error => {
      console.log(error)
    })
  }

  gotoAddProperty() {
    this.cookieService.set('showrooms',1);
    this.router.navigate(['./dashboard/add-property'])
  }


}
