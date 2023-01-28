import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { map, Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';
import { LoaderService } from '../services/loader.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly loaderService: LoaderService
  ) {}

  canActivate(): Observable<boolean> | Promise<boolean> {
    const cred = localStorage.getItem('_cred');

    if (!cred) return this.router.navigateByUrl('/');

    this.loaderService.isLoading = true;

    return this.authService.checkAuth(JSON.parse(cred)).pipe(
      map((response) => {
        this.loaderService.isLoading = false;

        if (response.status === 'failure') {
          this.authService.logout();

          return false;
        }

        if (!response.data?.verification.verified) return false;

        this.authService.user = response.data;

        return true;
      })
    );
  }
}
