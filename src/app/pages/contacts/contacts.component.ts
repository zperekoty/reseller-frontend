import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
})
export class ContactsComponent {
  constructor(private readonly titleService: Title) {
    this.titleService.setTitle('ReSeller | Контакты');
  }
}
