import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

import { FirestoreResponse, User } from '../types';
import { LoaderService } from './loader.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly router: Router,
    private readonly loaderService: LoaderService
  ) {}

  isAuth: boolean = false;
  isVerified: boolean = false;

  user: User;

  error: string = '';

  login(
    user: { login: string; password: string },
    navigateTo: string = ''
  ): void {
    this.loaderService.isLoading = true;

    this.httpClient
      .post<FirestoreResponse<User>>(
        'https://api.zperekoty.store/users/login',
        user
      )
      .pipe(
        tap((response) => {
          if (response.status === 'failure') {
            this.loaderService.isLoading = false;

            if (this.isAuth) return this.logout();

            this.error = response.message;

            return setTimeout(() => (this.error = ''), 5000);
          }

          this.isVerified = (response.data as User).verification.verified;

          localStorage.setItem('_cred', JSON.stringify(user));

          this.isAuth = true;

          this.user = response.data as User;

          this.loaderService.isLoading = false;

          return navigateTo.length ? this.router.navigate([navigateTo]) : '';
        })
      )
      .subscribe();
  }

  register(user: {
    login: string;
    name: string;
    password: string;
    telegram: string;
  }): void {
    this.loaderService.isLoading = true;

    this.httpClient
      .post<FirestoreResponse<User>>('https://api.zperekoty.store/users', user)
      .pipe(
        tap((response) => {
          if (response.status === 'failure') {
            this.loaderService.isLoading = false;

            this.error = response.message;

            return setTimeout(() => (this.error = ''), 5000);
          }

          localStorage.setItem(
            '_cred',
            JSON.stringify({ login: user.login, password: user.password })
          );

          this.user = response.data as User;

          this.router.navigate(['/']);

          this.loaderService.isLoading = false;

          return (this.isAuth = true);
        })
      )
      .subscribe();
  }

  logout(): void {
    this.loaderService.isLoading = true;

    this.isAuth = false;

    this.isVerified = false;

    this.user = {} as User;

    localStorage.removeItem('_cred');

    localStorage.removeItem('_cart');

    this.loaderService.isLoading = false;

    location.reload();

    location.replace('/login');
  }

  checkVerification(): void {
    this.loaderService.isLoading = true;

    this.httpClient
      .get<FirestoreResponse<User>>(
        `https://api.zperekoty.store/users/${this.user.id}`
      )
      .pipe(
        tap((response) => {
          if (!response.data?.verification.verified) {
            this.loaderService.isLoading = false;

            this.error = 'Ваш аккаунт все еще не верифицирован';

            setTimeout(() => (this.error = ''), 5000);

            return (this.isVerified = false);
          }

          this.router.navigate(['/']);

          this.loaderService.isLoading = false;

          return (this.isVerified = true);
        })
      )
      .subscribe();
  }

  checkAuth(user: {
    login: string;
    password: string;
  }): Observable<FirestoreResponse<User>> {
    return this.httpClient.post<FirestoreResponse<User>>(
      'https://api.zperekoty.store/users/login',
      user
    );
  }
}
