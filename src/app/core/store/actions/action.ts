import { Action, createAction, props } from '@ngrx/store';
import { ForecastData } from '../../models/forecast-data.model';

export const loadForecastData = createAction('[FORECAST] loadForecastData');

export const setForecastData = createAction(
  '[FORECAST] setForecastData',
  props<{ forecastData: ForecastData }>()
);
