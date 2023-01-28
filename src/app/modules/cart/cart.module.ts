import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartService } from 'src/app/services/cart.service';
import { LoaderModule } from '../loader/loader.module';

@NgModule({
  imports: [CommonModule, LoaderModule],
  providers: [CartService],
})
export class CartModule {}
