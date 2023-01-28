import { Component, Input } from '@angular/core';

@Component({
  selector: 'bakset',
  templateUrl: './bakset.component.html',
})
export class BaksetComponent {
  @Input() classes: string;
}
