import { createSelector } from '@ngrx/store';
import {
  ConsolidatedWeather,
  ForecastData,
} from '../../models/forecast-data.model';

const selectForecastData = (state: any) => state.forecast.forecastData;

const selectConsolidateWeather = createSelector(
  selectForecastData,
  (state: any) => state.consolidated_weather[0]
);

export const selectWeatherStateName = createSelector(
  selectConsolidateWeather,
  (state: ConsolidatedWeather) => state.weather_state_name
);

export const selectWeatherStateAbbr = createSelector(
  selectConsolidateWeather,
  (state: ConsolidatedWeather) => state.weather_state_abbr
);

export const selectWindSpeed = createSelector(
  selectConsolidateWeather,
  (state: ConsolidatedWeather) => state.wind_speed?.toFixed(0)
);

export const selectWindDirectionCompas = createSelector(
  selectConsolidateWeather,
  (state: ConsolidatedWeather) => state.wind_direction_compass
);

export const selectWindDirection = createSelector(
  selectConsolidateWeather,
  (state: ConsolidatedWeather) => state.wind_direction
);

export const selectHumidity = createSelector(
  selectConsolidateWeather,
  (state: ConsolidatedWeather) => state.humidity
);

export const selectAirPressure = createSelector(
  selectConsolidateWeather,
  (state: ConsolidatedWeather) => state.air_pressure
);

export const selectVisibility = createSelector(
  selectConsolidateWeather,
  (state: ConsolidatedWeather) => state.visibility?.toFixed(1)
);

export const selectTemp = createSelector(
  selectConsolidateWeather,
  (state: ConsolidatedWeather) => state.the_temp?.toFixed(0)
);

export const selectTitle = createSelector(
  selectForecastData,
  (state: ForecastData) => state.title
);

export const selectFiveDaysForecast = createSelector(
  selectForecastData,
  (state: any) => state.consolidated_weather.slice(1)
);
