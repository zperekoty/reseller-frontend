import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsComponent } from 'src/app/pages/docs/docs.component';
import { PricingComponent } from 'src/app/pages/pricing/pricing.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { RegistrationComponent } from 'src/app/pages/registration/registration.component';
import { ReSellerRoutingModule } from 'src/app/reseller-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from '../auth/auth.module';
import { CartComponent } from 'src/app/pages/cart/cart.component';
import { NotFoundComponent } from 'src/app/pages/not-found/not-found.component';
import { ProductsModule } from '../products/products.module';
import { DarkmodeModule } from '../darkmode/darkmode.module';
import { CartModule } from '../cart/cart.module';
import { ProfileComponent } from 'src/app/pages/profile/profile.component';
import { LoaderModule } from '../loader/loader.module';
import { OrdersModule } from '../orders/orders.module';
import { QuickAuthComponent } from 'src/app/pages/quick-auth/quick-auth.component';
import { QuickAuthModule } from '../quick-auth/quick-auth.module';
import { ModalsModule } from '../modals/modals.module';
import { SvgModule } from '../svg/svg.module';
import { ContactsComponent } from 'src/app/pages/contacts/contacts.component';

@NgModule({
  declarations: [
    HomeComponent,
    DocsComponent,
    PricingComponent,
    LoginComponent,
    RegistrationComponent,
    CartComponent,
    NotFoundComponent,
    ProfileComponent,
    QuickAuthComponent,
    ContactsComponent,
  ],
  imports: [
    CommonModule,
    ReSellerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    ProductsModule,
    DarkmodeModule,
    CartModule,
    LoaderModule,
    OrdersModule,
    QuickAuthModule,
    ModalsModule,
    SvgModule,
  ],
})
export class PagesModule {}
