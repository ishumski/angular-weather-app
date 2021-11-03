import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarPresentationComponent } from './sidebar/sidebar.presentation.component';
import { SidebarSmartComponent } from './sidebar/sidebar.smart.component';

@NgModule({
  declarations: [SidebarSmartComponent, SidebarPresentationComponent],
  exports: [SidebarSmartComponent],
  imports: [CommonModule],
  providers: [],
})
export class ForecastModule {}
