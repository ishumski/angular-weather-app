import { createSelector } from '@ngrx/store';
import {
  ConsolidatedWeather,
  ForecastData,
} from '../../models/forecast-data.model';

const selectForecastData = (state: any) => state.forecast.forecastData;

const selectConsolidateWeather = createSelector(
  selectForecastData,
  (state: ForecastData) => state.consolidated_weather[0]
);

export const selectWeatherStateName = createSelector(
  selectConsolidateWeather,
  (state: ConsolidatedWeather) => state.weather_state_name
);

export const selectWeatherStateAbbr = createSelector(
  selectConsolidateWeather,
  (state: ConsolidatedWeather) => state.weather_state_abbr
);

export const selectTemp = createSelector(
  selectConsolidateWeather,
  (state: ConsolidatedWeather) => state.the_temp
);

export const selectTitle = createSelector(
  selectForecastData,
  (state: ForecastData) => state.title
);
