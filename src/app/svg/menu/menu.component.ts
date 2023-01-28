import { Component, Input } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  @Input() classes: string;
}
