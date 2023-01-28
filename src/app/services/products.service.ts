import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { FirestoreResponse, Products } from '../types';
import { LoaderService } from './loader.service';

@Injectable()
export class ProductsService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly loaderService: LoaderService
  ) {}

  products: Products[] = [];

  getAllProducts(): void {
    this.loaderService.isLoading = true;

    this.httpClient
      .get<FirestoreResponse<Products[]>>(
        'https://api.zperekoty.store/products'
      )
      .pipe(
        tap((response) => {
          if (response.status === 'failure')
            return (this.loaderService.isLoading = false);

          this.loaderService.isLoading = false;

          return (this.products = [...(response.data as Products[])]);
        })
      )
      .subscribe();
  }

  getProduct(id: string): void {
    this.loaderService.isLoading = true;

    this.httpClient
      .get<FirestoreResponse<Products>>(
        `https://api.zperekoty.store/products/${id}`
      )
      .pipe(
        tap((response) => {
          if (response.status === 'failure')
            return (this.loaderService.isLoading = false);

          this.loaderService.isLoading = false;

          return this.products.push(response.data as Products);
        })
      )
      .subscribe();
  }

  getUserProducts(id: string): Observable<FirestoreResponse<Products[]>> {
    this.loaderService.isLoading = true;

    return this.httpClient.get<FirestoreResponse<Products[]>>(
      `https://api.zperekoty.store/products/user/${id}`
    );
  }

  createProduct(product: Products): Observable<FirestoreResponse<Products>> {
    this.loaderService.isLoading = true;

    return this.httpClient.post<FirestoreResponse<Products>>(
      'https://api.zperekoty.store/products',
      product
    );
  }

  updateProduct(product: Products): Observable<FirestoreResponse<Products>> {
    this.loaderService.isLoading = true;

    return this.httpClient.put<FirestoreResponse<Products>>(
      'https://api.zperekoty.store/products',
      product
    );
  }

  deleteProduct(id: string): Observable<FirestoreResponse<Products>> {
    this.loaderService.isLoading = true;

    return this.httpClient.delete<FirestoreResponse<Products>>(
      `https://api.zperekoty.store/products/${id}`
    );
  }
}
