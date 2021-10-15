import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, catchError } from 'rxjs/operators';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(
    public http: HttpClient
  ) { }

  getMasters(): Observable<any> {
    let url = `${environment.apiHost}/admin/getMaster`;
    return this.http.get(url).pipe(map((data:any) => {
      return data;
    }))
  }

  getSubMasters(masterId: any): Observable<any> {
    let url = `${environment.apiHost}/admin/getLevel/${masterId}`;
    return this.http.get(url).pipe(map((data:any) => {
      return data;
    }))
  }

  createMaster(data: any): Observable<any> {
    let url = `${environment.apiHost}/admin/addMaster`;
    return this.http.post(url, data).pipe(map(data => {
      return data;
    }))
  }

  updateMaster(master: any): Observable<any> {
    let level = master.levelOneId ? 'level2' : 'level1';
    let url = `${environment.apiHost}/admin/updateLevel/${level}/${master._id}`;
    return this.http.put(url, master).pipe(map(data => {
      return data;
    }))
  }

  addSubMasterLevelOne(item: any): Observable<any> {
    let url = `${environment.apiHost}/admin/addLevel1`;
    return this.http.post(url, item).pipe(map(data => {
      return data;
    }))
  }

  addSubMasterLevelTwo(item: any): Observable<any> {
    let url = `${environment.apiHost}/admin/addLevel2`;
    return this.http.post(url, item).pipe(map(data => {
      return data;
    }))
  }
  createCObrowseConifg(data: any): Observable<any> {
    let url = `${environment.apiHost}/admin/cobrowseConfig`;
    return this.http.post(url, data).pipe(map(data => {
      return data;
    }))
  }
  getCobrowseConfigs(): Observable<any> {
    let url = `${environment.apiHost}/admin/getCobrowseConfigs`;
    return this.http.get(url).pipe(map(data => {
      return data;
    }))
  }
}
