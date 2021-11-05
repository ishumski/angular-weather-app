import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarPresentationComponent } from './sidebar/sidebar.presentation.component';
import { SidebarSmartComponent } from './sidebar/sidebar.smart.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SidebarSmartComponent, SidebarPresentationComponent],
  exports: [SidebarSmartComponent],
  imports: [CommonModule, SharedModule],
  providers: [],
})
export class ForecastModule {}
