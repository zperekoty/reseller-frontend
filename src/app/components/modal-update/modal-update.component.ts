import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';
import { ModalsService } from 'src/app/services/modals.service';

interface Validator {
  name: boolean;
  price: boolean;
  amount: boolean;
  message: {
    name: string;
    price: string;
    amount: string;
  };
}

@Component({
  selector: 'modal-update',
  templateUrl: './modal-update.component.html',
})
export class ModalUpdateComponent {
  constructor(
    public readonly modalsService: ModalsService,
    private readonly authService: AuthService
  ) {
    this.modalsService.message = '';
  }

  form = new FormGroup({
    name: new FormControl<string>(this.modalsService.product.name),
    description: new FormControl<string>(
      this.modalsService.product.description
    ),
    price: new FormControl<string>(this.modalsService.product.price.toString()),
    amount: new FormControl<string>(
      this.modalsService.product.amount.toString()
    ),
  });

  validator: Validator = {
    name: true,
    price: true,
    amount: true,
    message: {
      name: '',
      price: '',
      amount: '',
    },
  };

  submit() {
    if (
      (this.form.value.name?.trim().length as number) < 4 ||
      Number(this.form.value.amount?.trim()) < 1 ||
      Number(this.form.value.price?.trim()) < 50
    ) {
      this.validator = {
        name:
          (this.form.value.name?.trim().length as number) > 4 ? true : false,
        price: Number(this.form.value.price?.trim()) > 50 ? true : false,
        amount: Number(this.form.value.amount?.trim()) > 1 ? true : false,
        message: {
          name:
            (this.form.value.name?.trim().length as number) > 4
              ? ''
              : 'Длина названия не может быть меньше 4',
          price:
            Number(this.form.value.price?.trim()) > 50
              ? ''
              : 'Цена должна быть больше ₽50',
          amount:
            Number(this.form.value.amount?.trim()) > 1
              ? ''
              : 'Количество товара не может быть меньше 1',
        },
      };

      return setTimeout(
        () =>
          (this.validator = {
            name: true,
            price: true,
            amount: true,
            message: {
              name: '',
              price: '',
              amount: '',
            },
          }),
        5000
      );
    }

    return this.modalsService.updateProduct({
      name: this.form.value.name?.trim() as string,
      description: this.form.value.description?.trim() as string,
      price: Number(this.form.value.price?.trim()),
      amount: Number(this.form.value.amount?.trim()),
      interface: 'products',
      id: this.modalsService.product.id,
      owner: this.authService.user.id,
    });
  }

  close(): void {
    this.modalsService.closeModal('update');
  }
}
