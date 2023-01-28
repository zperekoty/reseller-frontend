import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class NotAuthGuard implements CanActivate {
  constructor(private readonly router: Router) {}

  canActivate(): boolean | Promise<boolean> {
    const cred = localStorage.getItem('_cred');

    if (!cred) return true;

    return this.router.navigateByUrl('/');
  }
}
