import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaksetComponent } from 'src/app/svg/bakset/bakset.component';
import { SunComponent } from 'src/app/svg/sun/sun.component';
import { MoonComponent } from 'src/app/svg/moon/moon.component';
import { CopyComponent } from 'src/app/svg/copy/copy.component';
import { MenuComponent } from 'src/app/svg/menu/menu.component';
import { CloseComponent } from 'src/app/svg/close/close.component';
import { LoaderComponent } from 'src/app/svg/loader/loader.component';
import { ProfileComponent } from 'src/app/svg/profile/profile.component';
import { TelegramComponent } from 'src/app/svg/telegram/telegram.component';
import { MailComponent } from 'src/app/svg/mail/mail.component';
import { GithubComponent } from 'src/app/svg/github/github.component';

@NgModule({
  declarations: [
    BaksetComponent,
    SunComponent,
    MoonComponent,
    CopyComponent,
    MenuComponent,
    CloseComponent,
    LoaderComponent,
    ProfileComponent,
    TelegramComponent,
    MailComponent,
    GithubComponent,
  ],
  imports: [CommonModule],
  exports: [
    BaksetComponent,
    SunComponent,
    MoonComponent,
    CopyComponent,
    MenuComponent,
    CloseComponent,
    LoaderComponent,
    ProfileComponent,
    TelegramComponent,
    MailComponent,
    GithubComponent,
  ],
})
export class SvgModule {}
