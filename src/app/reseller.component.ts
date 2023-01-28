import { Component } from '@angular/core';
import { Router, NavigationStart, Event as RouterEvent } from '@angular/router';

import { AuthService } from './services/auth.service';
import { CartService } from './services/cart.service';
import { LoaderService } from './services/loader.service';
import { ModalsService } from './services/modals.service';

@Component({
  selector: 'reseller',
  templateUrl: './reseller.component.html',
})
export class ReSellerComponent {
  constructor(
    public readonly authService: AuthService,
    public readonly cartService: CartService,
    private readonly router: Router,
    public readonly loaderService: LoaderService,
    public readonly modalsService: ModalsService
  ) {
    this.authService.error = '';

    this.router.events.subscribe((event) => this.routeChangerHandler(event));

    const cred = localStorage.getItem('_cred');

    if (cred) this.authService.login(JSON.parse(cred));
  }

  copied: boolean = false;

  loading: boolean = false;

  routeChangerHandler(event: RouterEvent): boolean {
    return event instanceof NavigationStart
      ? (this.loading = true)
      : (this.loading = false);
  }

  copy(): void {
    navigator.clipboard.writeText(
      this.authService.user.verification.verificationCode as string
    );

    this.copied = true;

    setTimeout(() => (this.copied = false), 1500);
  }

  basket(): void {
    this.router.navigate(['/cart']);
  }
}
