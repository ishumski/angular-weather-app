import { createReducer, on, Action } from '@ngrx/store';
import { ForecastInitialState } from '../../models/forecast-data.model';
import { setForecastData } from '../actions/action';

export const initialState: ForecastInitialState = {
  forecastData: {
    title: '',
    consolidated_weather: [
      {
        air_pressure: 0,
        applicable_date: '',
        created: '',
        humidity: 0,
        id: 0,
        max_temp: 0,
        min_temp: 0,
        predictability: 0,
        the_temp: 0,
        visibility: 0,
        weather_state_abbr: '',
        weather_state_name: '',
        wind_direction: 0,
        wind_direction_compass: '',
        wind_speed: 0,
      },
    ],
  },
};

const reducer = createReducer(
  initialState,
  on(setForecastData, (state, { forecastData }): any => {
    return {
      ...state,
      forecastData: forecastData,
    };
  })
);

export function ForecastDataReducer(
  state: ForecastInitialState | undefined,
  action: Action
) {
  return reducer(state, action);
}
