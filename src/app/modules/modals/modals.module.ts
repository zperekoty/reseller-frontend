import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModalCreateComponent } from 'src/app/components/modal-create/modal-create.component';
import { ModalDeleteComponent } from 'src/app/components/modal-delete/modal-delete.component';
import { ModalUpdateComponent } from 'src/app/components/modal-update/modal-update.component';
import { ProductsModule } from '../products/products.module';
import { ModalsService } from 'src/app/services/modals.service';

@NgModule({
  declarations: [
    ModalCreateComponent,
    ModalDeleteComponent,
    ModalUpdateComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ProductsModule],
  providers: [ModalsService],
  exports: [ModalCreateComponent, ModalDeleteComponent, ModalUpdateComponent],
})
export class ModalsModule {}
