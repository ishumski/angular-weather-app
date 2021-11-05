import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ForecastDataReducer } from './core/store/reducers/reducer';
import { ForecastDataEffect } from './core/store/effects/effects';
import { ForecastDataService } from './core/services/forecast-data.service';
import { ForecastModule } from './features/forecast/forecast.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ForecastModule,
    SharedModule,
    EffectsModule.forRoot([ForecastDataEffect]),
    StoreModule.forRoot({ forecast: ForecastDataReducer }),
  ],
  providers: [ForecastDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
