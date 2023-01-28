import { Component, Input } from '@angular/core';

@Component({
  selector: 'sun',
  templateUrl: './sun.component.html',
})
export class SunComponent {
  @Input() classes: string;
}
