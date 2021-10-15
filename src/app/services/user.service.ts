import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CookieService } from './cookie.service';
import { Observable } from "rxjs";
import { map, catchError } from 'rxjs/operators';
import { environment } from "../../environments/environment";
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  editUserData: any;

  constructor(
    public http: HttpClient,
    public toastr: ToastrService,
    public router: Router,
    private cookieService:CookieService
  ) { }

  login(item: any): Observable<any> {
    let url = `${environment.apiHost}/user/login`;
    return this.http.post(url, item).pipe(map((data: any) => {
      if(data.response.code === 'OK') {
        this.cookieService.set('loginData', JSON.stringify(data.response.data));
        this.toastr.success('Logged in successfully!', 'Login Succuss!');
        this.router.navigate(['dashboard']);
      } else {
        this.toastr.error('Wrong credentials or May be already logged in from another device!', 'Login Error!');
      }
      return data;
    }));
  }

  logout(): Observable<any> {
    let url = `${environment.base_url}/api/user/logout`;
    let item = localStorage.getItem('loginData');
    return this.http.post(url, item).pipe(map((data:any) => {
      if(data.output) {
        sessionStorage.clear();
        this.router.navigate(['login']);
      } else {
        this.toastr.error('Failed to logout user!', 'Logout User!');
      }
      return data;
    }))
  }

  createUser(data: any): Observable<any> {
    let url = `${environment.base_url}/api/user/adduser`;
    return this.http.post(url, data).pipe(map((data:any) => {
      if(data.output) {
        this.toastr.success('User Added Successfully!', 'Add User!');
      } else {
        this.toastr.error('Failed to add user!', 'Add User!');
      }
      return data;
    }))
  }

  updateUser(data: any,userId:String): Observable<any> {
    let url = `${environment.base_url}/api/user/updateuser/${userId}`;
    return this.http.put(url, data).pipe(map((data:any) => {
      if(data.output) {
        this.toastr.success('User Added Successfully!', 'User Updated ');
      } else {
        this.toastr.error('Failed to add user!', 'Add User!');
      }
      return data;
    }))
  }

  deleteUser(userId:String): Observable<any> {
    let url = `${environment.base_url}/api/user/delete/${userId}`;
    return this.http.delete(url).pipe(map((data:any) => {
      if(data.output) {
        this.toastr.success('User Deleted Successfully!', 'User Deleted');
      } else {
        this.toastr.error('Failed to add user!', 'Add User!');
      }
      return data;
    }))
  }

  logoutUser(item: any): Observable<any> {
    let url = `${environment.base_url}/api/user/logout`;
    return this.http.post(url, item).pipe(map((data:any) => {
      if(data.output) {
        this.toastr.success('User Logged out Successfully!', 'User Logout');
      } else {
        this.toastr.error('Failed to logout user!', 'Logout User!');
      }
      return data;
    }))
  }

  getAgents(): Observable<any> {
    let url = `${environment.apiHost}/admin/getAgent`;
    return this.http.get(url).pipe(map(data => {
      console.log(data);
      return data;
    }))
  }
}
