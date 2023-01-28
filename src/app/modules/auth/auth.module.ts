import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';
import { CartModule } from '../cart/cart.module';
import { LoaderModule } from '../loader/loader.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    CartModule,
    LoaderModule,
  ],
  providers: [AuthService],
})
export class AuthModule {}
