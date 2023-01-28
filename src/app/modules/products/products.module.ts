import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsService } from 'src/app/services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { LoaderModule } from '../loader/loader.module';

@NgModule({
  imports: [CommonModule, HttpClientModule, LoaderModule],
  providers: [ProductsService],
})
export class ProductsModule {}
