import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

import { Cart, FirestoreResponse, Orders, Products } from '../types';
import { AuthService } from './auth.service';
import { LoaderService } from './loader.service';

@Injectable()
export class CartService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly authService: AuthService,
    private readonly loaderService: LoaderService
  ) {
    const cart = localStorage.getItem('_cart');

    if (cart) this.cart = [...JSON.parse(cart)];
  }

  cart: Cart[] = [];

  message: string = '';

  addToCart(product: Products): void {
    const _prod = this.cart.find((prod) => prod.id === product.id);

    if (!_prod) {
      this.cart.unshift({ ...product, amount: 1 });

      return localStorage.setItem('_cart', JSON.stringify(this.cart));
    }

    _prod.amount += 1;

    const newCart = this.cart.filter((prod) => prod.id !== product.id);

    newCart.unshift(_prod);

    this.cart = [...newCart];

    return localStorage.setItem('_cart', JSON.stringify(newCart));
  }

  removeFromCart(id: string): void {
    const product = this.cart.find((prod) => prod.id === id);

    if (!product) return;

    this.cart = this.cart.filter((prod) => prod.id !== id);

    return localStorage.setItem('_cart', JSON.stringify(this.cart));
  }

  createOrder(): void {
    this.loaderService.isLoading = true;

    this.httpClient
      .post<FirestoreResponse<Orders>>('https://api.zperekoty.store/orders', {
        products: this.cart,
        owner: this.authService.user.id,
        interface: 'orders',
      })
      .pipe(
        tap((response) => {
          if (response.status === 'failure') {
            this.loaderService.isLoading = false;

            this.message = `error:${response.message}`;

            return setTimeout(() => (this.message = ''), 5000);
          }

          localStorage.removeItem('_cart');

          this.cart = [];

          this.message = response.message;

          this.loaderService.isLoading = false;

          return setTimeout(() => (this.message = ''), 5000);
        })
      )
      .subscribe();
  }
}
