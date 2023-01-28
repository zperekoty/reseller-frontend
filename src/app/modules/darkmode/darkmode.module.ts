import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DarkmodeService } from 'src/app/services/darkmode.service';

@NgModule({
  imports: [CommonModule],
  providers: [DarkmodeService],
})
export class DarkmodeModule {}
