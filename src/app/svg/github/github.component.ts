import { Component, Input } from '@angular/core';

@Component({
  selector: 'github',
  templateUrl: './github.component.html',
})
export class GithubComponent {
  @Input() classes: string;
}
