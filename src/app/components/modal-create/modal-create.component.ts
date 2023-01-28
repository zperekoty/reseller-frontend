import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

import { ModalsService } from 'src/app/services/modals.service';
import { Products } from 'src/app/types';

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
  selector: 'modal-create',
  templateUrl: './modal-create.component.html',
})
export class ModalCreateComponent {
  constructor(
    public readonly modalsService: ModalsService,
    private readonly authService: AuthService
  ) {
    this.modalsService.message = '';
  }

  form = new FormGroup({
    name: new FormControl<string>(''),
    description: new FormControl<string>(''),
    price: new FormControl<string>(''),
    amount: new FormControl<string>(''),
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

  submit(): void | NodeJS.Timeout {
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
              : 'Длина названия должна быть не меньше 4',
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

    return this.modalsService.createProduct({
      name: this.form.value.name?.trim() as string,
      description: this.form.value.description?.trim() as string,
      price: Number(this.form.value.price?.trim()),
      amount: Number(this.form.value.amount?.trim()),
      interface: 'products',
      owner: this.authService.user.id,
    } as Products);
  }

  close(): void {
    this.modalsService.closeModal('create');
  }
}
