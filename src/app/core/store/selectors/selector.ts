import { createSelector } from '@ngrx/store';
import { CurrentLocationData } from '../../models/forecast-data.model';

export const selectForecastData = (state: any) => state;

export const selectWoeid = createSelector(
  selectForecastData,
  (state: CurrentLocationData) => state.woeid
);

// export const selectConsolidateWeather = createSelector(
//   selectForecastData,
//   (state: ForecastData) => state.consolidated_weather
// );

// export const selectTitle = createSelector(
//   selectForecastData,
//   (state: ForecastData) => state.title
// );
