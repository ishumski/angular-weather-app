import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { BadgeComponent } from './components/badge/badge.component';

@NgModule({
  declarations: [ButtonComponent, BadgeComponent],
  exports: [ButtonComponent, BadgeComponent],
  imports: [CommonModule],
  providers: [],
})
export class SharedModule {}
