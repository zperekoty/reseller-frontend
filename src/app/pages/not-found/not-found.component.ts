import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'not-found',
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {
  constructor(
    public readonly router: Router,
    private readonly titleService: Title
  ) {
    this.titleService.setTitle('ReSeller | 404 - страница не найдена');
  }

  toMain(): void {
    this.router.navigate(['/']);
  }
}
