import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { AuthService } from 'src/app/services/auth.service';

interface Validator {
  login: boolean;
  name: boolean;
  telegram: boolean;
  password: boolean;
  message: {
    login: string;
    name: string;
    telegram: string;
    password: string;
  };
}

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
})
export class RegistrationComponent {
  constructor(
    private readonly titleService: Title,
    public readonly authService: AuthService
  ) {
    this.titleService.setTitle('ReSeller | Регистрация');
    this.authService.error = '';
  }

  form = new FormGroup({
    login: new FormControl<string>(''),
    name: new FormControl<string>(''),
    telegram: new FormControl<string>(''),
    password: new FormControl<string>(''),
  });

  validator: Validator = {
    login: true,
    name: true,
    telegram: true,
    password: true,
    message: {
      login: '',
      name: '',
      telegram: '',
      password: '',
    },
  };

  submit(): void | NodeJS.Timeout {
    if (
      (this.form.value.login?.trim().length as number) < 4 ||
      (this.form.value.password?.trim().length as number) < 8 ||
      (this.form.value.name?.trim().length as number) < 2 ||
      (this.form.value.telegram?.trim().length as number) < 2
    ) {
      this.validator = {
        login:
          (this.form.value.login?.trim().length as number) > 4 ? true : false,
        name:
          (this.form.value.name?.trim().length as number) > 2 ? true : false,
        telegram:
          (this.form.value.telegram?.trim().length as number) > 2
            ? true
            : false,
        password:
          (this.form.value.password?.trim().length as number) > 8
            ? true
            : false,
        message: {
          login:
            (this.form.value.login?.trim().length as number) > 4
              ? ''
              : 'Длина логина должна быть не меньше 4',
          name:
            (this.form.value.name?.trim().length as number) > 2
              ? ''
              : 'Длина имени должна быть не меньше 2',
          telegram:
            (this.form.value.telegram?.trim().length as number) > 2
              ? ''
              : 'Длина телеграма должна быть не меньше 2',
          password:
            (this.form.value.password?.trim().length as number) > 8
              ? ''
              : 'Длина пароля должна быть не меньше 8',
        },
      };

      return setTimeout(
        () =>
          (this.validator = {
            login: true,
            name: true,
            telegram: true,
            password: true,
            message: {
              login: '',
              name: '',
              telegram: '',
              password: '',
            },
          }),
        5000
      );
    }

    return this.authService.register({
      login: this.form.value.login as string,
      name: this.form.value.name as string,
      telegram: this.form.value.telegram as string,
      password: this.form.value.password as string,
    });
  }
}
