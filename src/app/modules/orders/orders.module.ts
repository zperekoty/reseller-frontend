import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersService } from 'src/app/services/orders.service';

@NgModule({
  imports: [CommonModule],
  providers: [OrdersService],
})
export class OrdersModule {}
