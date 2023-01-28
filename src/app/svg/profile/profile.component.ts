import { Component, Input } from '@angular/core';

@Component({
  selector: 'svg-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  @Input() classes: string;
}
