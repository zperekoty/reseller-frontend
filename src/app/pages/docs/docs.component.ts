import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'docs',
  templateUrl: './docs.component.html',
})
export class DocsComponent {
  constructor(private readonly titleService: Title) {
    this.titleService.setTitle('ReSeller | Документация');
  }
}
