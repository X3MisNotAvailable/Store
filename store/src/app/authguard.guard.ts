import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { ApiService } from './api.service';

@Injectable({
providedIn: 'root'
})

export class AuthguardGuard implements CanActivate {
    constructor(public auth: ApiService, public router: Router) {}
  canActivate(): boolean {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['/home-page']);
      return false;
    }
    return true;
  }
}
/*{
constructor(private dataService: ApiService,private router: Router ) {}
canActivate(
route: ActivatedRouteSnapshot,
state: RouterStateSnapshot) {
const routeurl: string = state.url;

return this.isLogin(routeurl);
}

isLogin(routeurl: string) {
if (this.dataService.isLoggedIn()) {
return true;
}

this.dataService.redirectUrl = routeurl;
this.router.navigate(['/login-page'], {queryParams: { returnUrl: routeurl }} );
}
} */