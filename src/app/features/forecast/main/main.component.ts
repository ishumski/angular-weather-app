import { Component, NgIterable, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ConsolidatedWeather } from 'src/app/core/models/forecast-data.model';
import {
  selectWindSpeed,
  selectWindDirectionCompas,
  selectWindDirection,
  selectHumidity,
  selectAirPressure,
  selectVisibility,
  selectFiveDaysForecast,
} from 'src/app/core/store/selectors/selector';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  selectWindSpeed$: Observable<number | string | undefined>;
  selectWindDirectionCompas$: Observable<string | undefined>;
  selectWindDirection$: Observable<number | undefined>;
  selectHumidity$: Observable<number | undefined>;
  selectAirPressure$: Observable<number | string | undefined>;
  selectVisibility$: Observable<number | string | undefined>;
  selectFiveDaysForecast$: Observable<
    NgIterable<ConsolidatedWeather> | null | undefined
  >;

  constructor(private store: Store) {
    this.selectWindSpeed$ = store.select(selectWindSpeed);
    this.selectWindDirectionCompas$ = store.select(selectWindDirectionCompas);
    this.selectWindDirection$ = store.select(selectWindDirection);
    this.selectHumidity$ = store.select(selectHumidity);
    this.selectAirPressure$ = store.select(selectAirPressure);
    this.selectVisibility$ = store.select(selectVisibility);
    this.selectFiveDaysForecast$ = store.select(selectFiveDaysForecast);
  }

  handleClickToF() {
    console.log('handleClickToF');
  }

  handleClickToC() {
    console.log('handleClickToC');
  }

  changeCelsiusToFahrenheit(temperature: number) {
    const changedToFahrenheit: number = parseFloat(
      ((temperature * 9) / 5 + 32).toFixed(1)
    );
    return changedToFahrenheit;
  }

  ngOnInit(): void {}
}
