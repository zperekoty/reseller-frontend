import { Component, Input } from '@angular/core';

@Component({
  selector: 'moon',
  templateUrl: './moon.component.html',
})
export class MoonComponent {
  @Input() classes: string;
}
