import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { BadgeComponent } from './components/badge/badge.component';
import { SvgIconTemplateComponent } from './components/icons/svg-icon-template/svg-icon-template.component';
import { CelsiusComponent } from './components/icons/celsius/celsius.component';
import { FahrenheitComponent } from './components/icons/fahrenheit/fahrenheit.component';
import { CardComponent } from './components/card/card.component';
import { ForecastSingleItemComponent } from './components/forecast-single-item/forecast-single-item.component';
import { ForecastInfoComponent } from './components/forecast-info/forecast-info.component';
import { HumidityBarComponent } from './components/humidity-bar/humidity-bar.component';

@NgModule({
  declarations: [
    ButtonComponent,
    BadgeComponent,
    SvgIconTemplateComponent,
    CelsiusComponent,
    FahrenheitComponent,
    CardComponent,
    ForecastSingleItemComponent,
    ForecastInfoComponent,
    HumidityBarComponent,
  ],
  exports: [
    ButtonComponent,
    BadgeComponent,
    SvgIconTemplateComponent,
    CelsiusComponent,
    FahrenheitComponent,
    CardComponent,
    ForecastSingleItemComponent,
    ForecastInfoComponent,
    HumidityBarComponent,
  ],
  imports: [CommonModule],
  providers: [],
})
export class SharedModule {}
