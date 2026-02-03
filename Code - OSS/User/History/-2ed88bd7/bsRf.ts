import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from '../../../app.routes';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
})
export class Navbar {
  router = inject(Router);

  routes = routes.map((route) => ({
    path: route.path,
    title: `${route.title ?? 'Maps en Angular'}`,
  }));

  pageTitle$ = this.router.events.pipe(
    tap((event) => console.log(event)
    
  ));
}
