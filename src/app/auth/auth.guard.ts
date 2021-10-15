import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  // type should be Observable while using http request
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

      //check some condition
      if (!sessionStorage.getItem('currentUser'))  {
          alert('You are not allowed to view this page');
          //redirect to login/home page etc
          //return false to cancel the navigation
          this.router.navigate(['login']);
          return false;
      }
      return true;
  }
}
