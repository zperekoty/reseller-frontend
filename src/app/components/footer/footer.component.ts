import { Component } from '@angular/core';

@Component({
  selector: 're-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  year: number = new Date().getFullYear();
}
