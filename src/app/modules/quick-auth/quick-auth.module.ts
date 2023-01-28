import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickAuthService } from 'src/app/services/quick-auth.service';

@NgModule({
  imports: [CommonModule],
  providers: [QuickAuthService],
})
export class QuickAuthModule {}
