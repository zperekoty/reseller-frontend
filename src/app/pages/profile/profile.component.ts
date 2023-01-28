import { Component } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/services/auth.service';
import { DarkmodeService } from 'src/app/services/darkmode.service';
import { LoaderService } from 'src/app/services/loader.service';
import { OrdersService } from 'src/app/services/orders.service';
import { ProductsService } from 'src/app/services/products.service';
import { Orders, Products } from 'src/app/types';
import { ModalsService } from 'src/app/services/modals.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  constructor(
    public readonly authService: AuthService,
    private readonly productsService: ProductsService,
    private readonly titleService: Title,
    public readonly darkModeSerivce: DarkmodeService,
    private readonly loaderService: LoaderService,
    private readonly ordersService: OrdersService,
    private readonly modalsService: ModalsService
  ) {
    this.titleService.setTitle(`ReSeller | ${this.authService.user.name}`);

    this.productsService
      .getUserProducts(this.authService.user.id)
      .subscribe((response) => {
        this.products = response.data as Products[];

        return (this.loaderService.isLoading = false);
      });

    this.ordersService
      .getUserOrders(this.authService.user.id)
      .subscribe((response) => {
        this.orders = response.data as Orders[];

        return (this.loaderService.isLoading = false);
      });
  }

  products: Products[] = [];
  orders: Orders[] = [];

  updateProduct(product: Products): void {
    this.modalsService.product = product;

    this.modalsService.showModal('update');
  }

  deleteProduct(id: string, name: string): void {
    this.modalsService.productId = id;
    this.modalsService.productName = name;
    this.modalsService.deleteType = 'product';

    this.modalsService.showModal('delete');
  }

  deleteAccount() {
    this.modalsService.deleteType = 'profile';

    this.modalsService.showModal('delete');
  }
}
