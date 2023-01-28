import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreResponse, Orders } from '../types';
import { LoaderService } from './loader.service';

@Injectable()
export class OrdersService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly loaderService: LoaderService
  ) {}

  getUserOrders(id: string): Observable<FirestoreResponse<Orders[]>> {
    this.loaderService.isLoading = true;

    return this.httpClient.get<FirestoreResponse<Orders[]>>(
      `https://api.zperekoty.store/orders/${id}`
    );
  }
}
