import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuService } from 'src/app/services/menu.service';

@NgModule({
  imports: [CommonModule],
  providers: [MenuService],
})
export class MenuModule {}
