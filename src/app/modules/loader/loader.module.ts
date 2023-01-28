import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from 'src/app/components/loader/loader.component';
import { LoaderService } from 'src/app/services/loader.service';
import { SvgModule } from '../svg/svg.module';

@NgModule({
  declarations: [LoaderComponent],
  imports: [CommonModule, SvgModule],
  providers: [LoaderService],
  exports: [LoaderComponent],
})
export class LoaderModule {}
