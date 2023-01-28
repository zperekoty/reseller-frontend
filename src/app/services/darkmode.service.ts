import { Injectable } from '@angular/core';

@Injectable()
export class DarkmodeService {
  constructor() {
    this.systemMode();

    const savedTheme = localStorage.getItem('theme');
    const darkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const link = document.getElementById('favicon');

    if (!savedTheme) {
      if (darkTheme) {
        this.darkMode = true;

        link?.setAttribute('href', 'assets/res-dark.svg');

        document.documentElement.classList.add('dark');
      } else {
        this.darkMode = false;

        link?.setAttribute('href', 'assets/res-light.svg');

        document.documentElement.classList.remove('dark');
      }
    } else {
      this.darkMode = savedTheme === 'dark' ? true : false;

      link?.setAttribute(
        'href',
        `assets/res-${savedTheme === 'dark' ? 'dark' : 'light'}.svg`
      );

      savedTheme === 'dark'
        ? document.documentElement.classList.add('dark')
        : document.documentElement.classList.remove('dark');
    }
  }

  darkMode: boolean = false;

  private systemMode(): void {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (event) => {
        const savedTheme = localStorage.getItem('theme');
        const link = document.getElementById('favicon');

        if (savedTheme) return;

        if (event.matches) {
          this.darkMode = true;

          link?.setAttribute('href', 'assets/res-dark.svg');

          document.documentElement.classList.add('dark');
        } else {
          this.darkMode = false;

          link?.setAttribute('href', 'assets/res-light.svg');

          document.documentElement.classList.remove('dark');
        }
      });
  }

  changeTheme(): void {
    const link = document.getElementById('favicon');

    if (this.darkMode) {
      this.darkMode = false;

      document.documentElement.classList.remove('dark');

      link?.setAttribute('href', 'assets/res-light.svg');

      return localStorage.setItem('theme', 'light');
    }

    this.darkMode = true;

    document.documentElement.classList.add('dark');

    link?.setAttribute('href', 'assets/res-dark.svg');

    return localStorage.setItem('theme', 'dark');
  }
}
