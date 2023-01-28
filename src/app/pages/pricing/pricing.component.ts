import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'pricing',
  templateUrl: './pricing.component.html',
})
export class PricingComponent {
  constructor(private readonly titleService: Title) {
    this.titleService.setTitle('ReSeller | Цены');
  }
}
