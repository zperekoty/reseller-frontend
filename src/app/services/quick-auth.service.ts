import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { FirestoreResponse, User } from '../types';
import { AuthService } from './auth.service';
import { LoaderService } from './loader.service';

@Injectable()
export class QuickAuthService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly authService: AuthService,
    private readonly loaderService: LoaderService,
    private readonly router: Router
  ) {}

  getQuickAuthLink(id: string): Observable<FirestoreResponse<User>> {
    return this.httpClient.get<FirestoreResponse<User>>(
      `https://api.zperekoty.store/qa/${id}`
    );
  }

  login(user: User): Promise<boolean> {
    this.loaderService.isLoading = true;

    localStorage.setItem(
      '_cred',
      JSON.stringify({ login: user.login, password: user.password })
    );

    this.authService.user = user;

    this.loaderService.isLoading = false;

    this.authService.isAuth = true;

    if (user.verification.verified) {
      this.authService.isVerified = true;
    }

    return this.router.navigateByUrl('/');
  }
}
