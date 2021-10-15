import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { CookieService } from 'src/app/services/cookie.service';
import { AppGlobals } from 'src/app/app.globals';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.scss']
})
export class RegisteredUsersComponent implements OnInit {

  showViewUser:Boolean = false;
  userInfo: any;
  registerUsersList:any = [];
  userData: any;
  
  constructor(
    private cookieService:CookieService,
    private http:HttpService,
    private appGlobals:AppGlobals,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.userInfo = JSON.parse(this.cookieService.get('loginData'));
    this.cookieService.delete('property');
    this.listAllRegisterUsers();
  }

  listAllRegisterUsers() {
    let postData = {
      userId: this.userInfo._id,
      registerUserType: 'registered'
    }
    this.http.postRequest(this.appGlobals.urls.listAllRegisterUsers, postData).subscribe((resp:any) => {
      let data = resp.response.data;
      this.registerUsersList = data;
    }, error => {
      
    })
  }

  viewUser(row:any) {
    this.userData = row;
    this.showViewUser? this.showViewUser =  false :  this.showViewUser = true;
  }

  editProperty(property:any) {
    this.cookieService.set('property', JSON.stringify(property));
    this.router.navigate(['/dashboard/add-property']);
  } 

}
