import { Injectable } from '@angular/core';
import { Router, CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LickyLoginService} from 'licky-services';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private _lickyLoginService: LickyLoginService, private _router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let url: string = state.url;
    console.log("canActivate - " + url);
    return this.checkLogin(url);
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }

  checkLogin(url: string): boolean {
    if (this._lickyLoginService.isLoggedIn) { return true; }

    // Store the attempted URL for redirecting
    this._lickyLoginService.redirectUrl = url;
    console.log("Redirecting back to login page bacuse isLoggedIn = " + this._lickyLoginService.isLoggedIn);
    // Navigate to the login page with extras
    this._router.navigate(['/application/login']);
    return false;
  }
}
