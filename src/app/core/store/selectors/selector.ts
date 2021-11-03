import { createSelector } from '@ngrx/store';
import {
  ConsolidatedWeather,
  ForecastInitialState,
} from '../../models/forecast-data.model';

export const selectForecastData = (state: ForecastInitialState) =>
  state.forecastData;

export const selectConsolidateWeather = createSelector(
  selectForecastData,
  (state): ConsolidatedWeather[] => state.consolidated_weather
);
