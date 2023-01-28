import { Component, Input } from '@angular/core';

@Component({
  selector: 'telegram',
  templateUrl: './telegram.component.html',
})
export class TelegramComponent {
  @Input() classes: string;
}
