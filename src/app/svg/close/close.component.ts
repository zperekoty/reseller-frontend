import { Component, Input } from '@angular/core';

@Component({
  selector: 'close',
  templateUrl: './close.component.html',
})
export class CloseComponent {
  @Input() classes: string;
}
