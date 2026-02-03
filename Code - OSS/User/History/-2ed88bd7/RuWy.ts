import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from '../../../app.routes';
import { map, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [AsyncPipe],
  templateUrl: './navbar.html',
})
export class Navbar {
  router = inject(Router);

  routes = routes.map((route) => ({
    path: route.path,
    title: `${route.title ?? 'Maps en Angular'}`,
  }));

  pageTitle$ = this.router.events.pipe(tap((event) => console.log(event)));
}
