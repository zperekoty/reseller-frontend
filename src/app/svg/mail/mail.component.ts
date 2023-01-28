import { Component, Input } from '@angular/core';

@Component({
  selector: 'mail',
  templateUrl: './mail.component.html',
})
export class MailComponent {
  @Input() classes: string;
}
