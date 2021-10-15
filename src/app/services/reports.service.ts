import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, catchError } from 'rxjs/operators';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(
    public http: HttpClient
  ) { }

  getViolationReports(fromDate:any, toDate: any): Observable<any> {
    let url = `${environment.apiHost}/admin/report/violationReport?fromDate=${fromDate}&toDate=${toDate}`;

    return this.http.get(url).pipe(map(data => {
      return data;
    }))
  }

  getLiveChatReports(fromDate:any, toDate: any): Observable<any> {
    let url = `${environment.apiHost}/admin/report/chatReport?fromDate=${fromDate}&toDate=${toDate}`;

    return this.http.get(url).pipe(map(data => {
      return data;
    }))
  }

  getAgentReports(date: any): Observable<any> {
    let url = `${environment.apiHost}/admin/report/getAgentActivity?date=${date}`;

    return this.http.get(url).pipe(map(data => {
      return data;
    }))
  }
}
