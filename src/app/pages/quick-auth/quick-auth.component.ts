import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';
import { QuickAuthService } from 'src/app/services/quick-auth.service';
import { User } from 'src/app/types';

@Component({
  selector: 'app-quick-auth',
  templateUrl: './quick-auth.component.html',
})
export class QuickAuthComponent {
  constructor(
    private readonly route: ActivatedRoute,
    public readonly quickAuthService: QuickAuthService,
    private readonly loaderSerivce: LoaderService,
    private readonly router: Router
  ) {
    this.route.params.subscribe((params) => {
      this.loaderSerivce.isLoading = true;

      this.id = params['id'];

      this.quickAuthService
        .getQuickAuthLink(params['id'])
        .subscribe((response) => {
          if (response.status === 'failure') {
            this.loaderSerivce.isLoading = false;

            return (this.error = response.message);
          }

          this.loaderSerivce.isLoading = false;

          return this.quickAuthService.login(response.data as User);
        });
    });
  }

  id: string;
  error: string;

  toMain(): void {
    this.router.navigateByUrl('/');
  }
}
