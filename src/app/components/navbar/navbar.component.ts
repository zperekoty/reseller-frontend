import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { DarkmodeService } from 'src/app/services/darkmode.service';
import { MenuService } from 'src/app/services/menu.service';
import { navbarLinks } from 'src/app/types';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  constructor(
    public readonly authService: AuthService,
    public readonly darkModeService: DarkmodeService,
    public readonly menuService: MenuService,
    private readonly router: Router,
    public readonly cartService: CartService
  ) {}

  linksAuthed: navbarLinks[] = [
    { text: 'документация', path: '/docs' },
    { text: 'цены', path: '/pricing' },
    { text: 'контакты', path: '/contacts' },
  ];

  linksNotAuthed: navbarLinks[] = [
    { text: 'документация', path: '/docs' },
    { text: 'цены', path: '/pricing' },
    { text: 'контакты', path: '/contacts' },
    { text: 'войти', path: '/login' },
    { text: 'регистрация', path: '/registration' },
  ];

  scrolled: boolean = false;

  @HostListener('document:scroll')
  scroll(): boolean {
    return document.documentElement.scrollTop >= 35
      ? (this.scrolled = true)
      : (this.scrolled = false);
  }

  logout(): void {
    this.cartService.cart = [];

    this.authService.logout();
  }

  basket(): void {
    this.router.navigate(['/cart']);
  }

  profile(): void {
    this.router.navigate(['/profile']);
  }
}
