import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthModule } from '../auth/auth.module';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { NotAuthGuard } from 'src/app/guards/not-auth.guard';

@NgModule({
  imports: [CommonModule, AuthModule],
  providers: [AuthGuard, NotAuthGuard],
})
export class GuardsModule {}
