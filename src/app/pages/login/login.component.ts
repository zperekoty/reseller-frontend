import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { AuthService } from 'src/app/services/auth.service';

interface Validator {
  login: boolean;
  password: boolean;
  message: {
    login: string;
    password: string;
  };
}

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(
    private readonly titleService: Title,
    public readonly authService: AuthService
  ) {
    this.titleService.setTitle('ReSeller | Вход');

    this.authService.error = '';
  }

  form = new FormGroup({
    login: new FormControl<string>(''),
    password: new FormControl<string>(''),
  });

  validator: Validator = {
    login: true,
    password: true,
    message: {
      login: '',
      password: '',
    },
  };

  submit(): void | NodeJS.Timeout | Promise<void> {
    if (
      (this.form.value.login?.trim().length as number) < 4 ||
      (this.form.value.password?.trim().length as number) < 8
    ) {
      this.validator = {
        login:
          (this.form.value.login?.trim().length as number) > 4 ? true : false,
        password:
          (this.form.value.password?.trim().length as number) > 8
            ? true
            : false,
        message: {
          login:
            (this.form.value.login?.trim().length as number) > 4
              ? ''
              : 'Длина логина не может быть меньше 4',
          password:
            (this.form.value.password?.trim().length as number) > 8
              ? ''
              : 'Длина пароля не может быть меньше 8',
        },
      };

      return setTimeout(
        () =>
          (this.validator = {
            login: true,
            password: true,
            message: {
              login: '',
              password: '',
            },
          }),
        5000
      );
    }

    return this.authService.login(
      {
        login: this.form.value.login as string,
        password: this.form.value.password as string,
      },
      '/'
    );
  }
}
