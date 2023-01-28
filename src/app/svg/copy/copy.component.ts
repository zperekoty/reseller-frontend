import { Component, Input } from '@angular/core';

@Component({
  selector: 'copy',
  templateUrl: './copy.component.html',
})
export class CopyComponent {
  @Input() classes: string;
}
