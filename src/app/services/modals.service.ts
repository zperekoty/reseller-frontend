import { Injectable } from '@angular/core';

import { ProductsService } from './products.service';
import { FirestoreResponse, Products, User } from '../types';
import { LoaderService } from './loader.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

type ModalName = 'create' | 'update' | 'delete';
type DeleteType = 'profile' | 'product';

@Injectable()
export class ModalsService {
  constructor(
    private readonly productsService: ProductsService,
    private readonly loaderService: LoaderService,
    private readonly httpClient: HttpClient,
    private readonly authService: AuthService
  ) {}

  create: boolean = false;
  delete: boolean = false;
  update: boolean = false;

  product: Products = {
    name: '',
    description: '',
    price: 0,
    amount: 0,
    id: '',
    owner: '',
    interface: 'products',
  };

  productId: string = '';
  productName: string = '';

  deleteType: DeleteType = 'product';

  message: string = '';

  createProduct(product: Products): void {
    this.productsService.createProduct(product).subscribe((response) => {
      if (response.status === 'failure') {
        this.loaderService.isLoading = false;

        this.message = `error:${response.message}`;

        return setTimeout(() => (this.message = ''), 5000);
      }

      this.loaderService.isLoading = false;

      this.productsService.products.unshift(response.data as Products);

      this.message = response.message;

      return setTimeout(() => {
        this.closeModal('create');
        this.message = '';
      }, 5000);
    });
  }

  updateProduct(product: Products): void {
    this.productsService.updateProduct(product).subscribe((response) => {
      if (response.status === 'failure') {
        this.loaderService.isLoading = false;

        this.message = `error:${response.message}`;

        return setTimeout(() => (this.message = ''), 5000);
      }

      this.loaderService.isLoading = false;

      this.message = response.message;

      let $ = this.productsService.products.find(
        (prod) => prod.id === product.id
      );

      $ = product;

      const _$ = this.productsService.products.filter(
        (prod) => prod.id !== product.id
      );

      _$.unshift($);

      this.productsService.products = _$;

      return setTimeout(() => {
        this.closeModal('update');
        this.message = '';
      }, 5000);
    });
  }

  deleteProduct(id: string): void {
    this.productsService.deleteProduct(id).subscribe((response) => {
      if (response.status === 'failure') {
        this.loaderService.isLoading = false;

        this.message = `error:${response.message}`;

        return setTimeout(() => (this.message = ''), 5000);
      }

      this.loaderService.isLoading = false;

      this.message = response.message;

      this.productsService.products = this.productsService.products.filter(
        (prod) => prod.id !== id
      );

      return setTimeout(() => {
        this.closeModal('delete');
        this.message = '';
      }, 5000);
    });
  }

  deleteAccount(): void {
    this.loaderService.isLoading = true;

    this.httpClient
      .delete<FirestoreResponse<User>>(
        `https://api.zperekoty.store/users/${this.authService.user.id}`
      )
      .subscribe((response) => {
        if (response.status === 'failure') {
          this.loaderService.isLoading = false;

          this.message = `error:${response.message}`;

          return setTimeout(() => (this.message = ''), 5000);
        }

        return this.authService.logout();
      });
  }

  closeModal(name: ModalName): boolean {
    return name === 'create'
      ? (this.create = false)
      : name === 'update'
      ? (this.update = false)
      : (this.delete = false);
  }

  showModal(name: ModalName): boolean {
    return name === 'create'
      ? (this.create = true)
      : name === 'update'
      ? (this.update = true)
      : (this.delete = true);
  }
}
