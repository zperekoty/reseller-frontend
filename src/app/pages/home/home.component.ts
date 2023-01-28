import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { DarkmodeService } from 'src/app/services/darkmode.service';
import { ModalsService } from 'src/app/services/modals.service';
import { ProductsService } from 'src/app/services/products.service';
import { Products } from 'src/app/types';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(
    private readonly titleService: Title,
    public readonly productsService: ProductsService,
    public readonly authService: AuthService,
    public readonly darkModeSerivce: DarkmodeService,
    private readonly cartService: CartService,
    private readonly modalsService: ModalsService
  ) {
    this.titleService.setTitle(
      'ReSeller | Покупайте и продавайте товары на свой вкус!'
    );

    this.productsService.products = [];
  }

  ngOnInit(): void {
    this.productsService.getAllProducts();
  }

  addToCart(product: Products): void {
    this.cartService.addToCart(product);
  }

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
}
