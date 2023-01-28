import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {
  constructor() {}

  opened: boolean = false;

  handleButton(): void {
    this.opened = !this.opened;
  }
}
