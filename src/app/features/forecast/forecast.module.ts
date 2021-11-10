import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarPresentationComponent } from './sidebar/sidebar.presentation.component';
import { SidebarSmartComponent } from './sidebar/sidebar.smart.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [SidebarSmartComponent, SidebarPresentationComponent, MainComponent],
  exports: [SidebarSmartComponent, MainComponent],
  imports: [CommonModule, SharedModule],
  providers: [],
})
export class ForecastModule {}
