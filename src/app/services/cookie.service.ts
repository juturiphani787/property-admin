import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor() { }
  set(key:any, value:any): any {
    window.localStorage.setItem(key, value);
  }

  get(key:any): any {
    return window.localStorage.getItem(key);
  }

  delete(key:any): any {
    return window.localStorage.removeItem(key);
  }

  deleteAll(): any {
    return window.localStorage.clear();
  }

  check(key:any) {
    return (window.localStorage.getItem(key) != undefined && window.localStorage.getItem(key) != null)
  }

}
