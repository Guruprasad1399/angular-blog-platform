import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  pageTitle: string = 'Welcome to Our Blog';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      let currentRoute = this.activatedRoute.root;
      while (currentRoute.firstChild) {
        currentRoute = currentRoute.firstChild;
      }
      this.pageTitle = this.getPageTitle(currentRoute.snapshot.data.title);
    });
  }

  private getPageTitle(routeTitle: string): string {
    return routeTitle ? `${routeTitle}` : 'Welcome to Our Blog';
  }
}
