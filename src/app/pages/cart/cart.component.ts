import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { CartService } from 'src/app/services/cart.service';
import { DarkmodeService } from 'src/app/services/darkmode.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
})
export class CartComponent {
  constructor(
    public readonly cartService: CartService,
    public readonly productsService: ProductsService,
    public readonly darkModeService: DarkmodeService,
    private readonly titleService: Title
  ) {
    this.getProducts();

    this.titleService.setTitle('ReSeller | Корзина');
  }

  getProducts(): void {
    if (this.cartService.cart.length < 1) return;

    this.productsService.products = [];

    this.cartService.cart.map((product) =>
      this.productsService.getProduct(product.id)
    );
  }

  imageText(text: string): string {
    return text.replaceAll(' ', '+');
  }

  remove(id: string): void {
    this.cartService.removeFromCart(id);

    this.productsService.products = this.productsService.products.filter(
      (prod) => prod.id !== id
    );
  }

  createOrder(): void {
    this.cartService.createOrder();
  }
}
