import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from './cookie.service';
import {environment} from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  departments: any;
  constructor(
    private http: HttpClient,
    private cookieService: CookieService) { 

    }


  getHeaders() {
    let headers: any = {
      'Content-Type': 'application/json',
      authorization: this.cookieService.get('token')
    };
    if (headers.authorization == null) {
      delete headers.authorization;
    }
    return headers;
  }

  postRequest(url: string, requestData: any, headerData?: any) {
    headerData = headerData ? headerData : this.getHeaders();
    const data = {
      request: requestData
    };
    return this.http.post(`${environment.apiHost}${url}`, data, { headers: headerData });
  }

  getRequest(url: string, headerData?: any) {
    headerData = headerData ? headerData : this.getHeaders();
    return this.http.get(`${environment.apiHost}${url}`, { headers: headerData });
  }
 
  postFiles(url: string, formData: any, headerData?: any) {
    headerData = headerData ? headerData : this.getHeaders();
    delete headerData['Content-Type'];
    return this.http.post(`${environment.apiHost}${url}`, formData, { headers: headerData });
  }
}
