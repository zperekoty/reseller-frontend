import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/not-auth.guard';
import { GuardsModule } from './modules/guards/guards.module';
import { CartComponent } from './pages/cart/cart.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { DocsComponent } from './pages/docs/docs.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { QuickAuthComponent } from './pages/quick-auth/quick-auth.component';
import { RegistrationComponent } from './pages/registration/registration.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'docs', component: DocsComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'login', component: LoginComponent, canActivate: [NotAuthGuard] },
  {
    path: 'registration',
    component: RegistrationComponent,
    canActivate: [NotAuthGuard],
  },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  {
    path: 'qa/:id',
    component: QuickAuthComponent,
    canActivate: [NotAuthGuard],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), GuardsModule],
  exports: [RouterModule],
})
export class ReSellerRoutingModule {}
