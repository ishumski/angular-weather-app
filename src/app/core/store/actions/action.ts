import { createAction, props } from '@ngrx/store';
import { ForecastData } from '../../models/forecast-data.model';

export const loadForecastData = createAction(
  '[FORECAST] loadForecastData',
  props<{ coords: string | void }>()
);

export const setForecastData = createAction(
  '[FORECAST] setForecastData',
  props<{ forecastData: ForecastData }>()
);
