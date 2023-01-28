import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

import { ModalsService } from 'src/app/services/modals.service';

interface Validator {
  name: boolean;
  message: string;
}

@Component({
  selector: 'modal-delete',
  templateUrl: './modal-delete.component.html',
})
export class ModalDeleteComponent {
  constructor(
    public readonly modalsService: ModalsService,
    public readonly authService: AuthService
  ) {
    this.modalsService.message = '';
  }

  validator: Validator = {
    name: true,
    message: '',
  };

  name: string = '';

  onInput(value: string): void {
    this.name = value;
  }

  submit(): void | NodeJS.Timeout {
    if (this.modalsService.deleteType === 'product') {
      if (
        this.name.trim().toLowerCase() !==
        this.modalsService.productName.toLowerCase()
      ) {
        this.validator = {
          name: false,
          message: 'Неверное название',
        };

        return setTimeout(
          () =>
            (this.validator = {
              name: true,
              message: '',
            }),
          5000
        );
      }

      return this.modalsService.deleteProduct(this.modalsService.productId);
    }

    if (
      this.name.trim().toLowerCase() !==
      this.authService.user.name.toLowerCase()
    ) {
      this.validator = {
        name: false,
        message: 'Неверное имя',
      };

      return setTimeout(
        () =>
          (this.validator = {
            name: true,
            message: '',
          }),
        5000
      );
    }

    return this.modalsService.deleteAccount();
  }

  close(): void {
    this.modalsService.closeModal('delete');
  }
}
