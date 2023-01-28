import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReSellerRoutingModule } from './reseller-routing.module';
import { ReSellerComponent } from './reseller.component';
import { NavbarFooterModule } from './modules/navbar-footer/navbar-footer.module';
import { PagesModule } from './modules/pages/pages.module';
import { AuthModule } from './modules/auth/auth.module';
import { SvgModule } from './modules/svg/svg.module';
import { LoaderModule } from './modules/loader/loader.module';
import { ModalsModule } from './modules/modals/modals.module';

@NgModule({
  declarations: [ReSellerComponent],
  imports: [
    BrowserModule,
    ReSellerRoutingModule,
    NavbarFooterModule,
    PagesModule,
    AuthModule,
    SvgModule,
    LoaderModule,
    ModalsModule,
  ],
  bootstrap: [ReSellerComponent],
})
export class ReSellerModule {}
