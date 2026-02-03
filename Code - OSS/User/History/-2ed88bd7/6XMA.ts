import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from '../../../app.routes';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
 
})
export class Navbar {

  routes = inject(Router)

  router = routes.map((route) => ({
    path:route.path,
    title:`${route.title ?? "Maps en Angular"}`
  }))
}
