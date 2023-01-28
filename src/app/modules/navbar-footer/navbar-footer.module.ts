import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { SvgModule } from '../svg/svg.module';
import { ReSellerRoutingModule } from 'src/app/reseller-routing.module';
import { AuthModule } from '../auth/auth.module';
import { RouterModule } from '@angular/router';
import { DarkmodeModule } from '../darkmode/darkmode.module';
import { MenuModule } from '../menu/menu.module';
import { CartModule } from '../cart/cart.module';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [
    CommonModule,
    ReSellerRoutingModule,
    SvgModule,
    AuthModule,
    RouterModule,
    DarkmodeModule,
    MenuModule,
    CartModule,
  ],
  exports: [NavbarComponent, FooterComponent],
})
export class NavbarFooterModule {}
