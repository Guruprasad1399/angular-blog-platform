import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';  // Import Title
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router'; // Import Router, NavigationEnd, ActivatedRoute
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog-guru';
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private titleService: Title) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter(route => route.outlet === 'primary'),
      map(route => route.snapshot.data)
    )
    .subscribe((event) => {
      const title = event['title'];
      this.titleService.setTitle(title);
    });
  }
}
