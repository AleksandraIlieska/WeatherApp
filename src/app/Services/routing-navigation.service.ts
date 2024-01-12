import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingNavigationService {

  constructor(
    private router: Router,
  ) { }

  navigateToURL(routeName: string) {
    this.router.navigateByUrl(routeName);
  }
}
