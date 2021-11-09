import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadForecastData, setForecastData } from '../actions/action';
import { ForecastDataService } from '../../services/forecast-data.service';
import { CurrentLocationData } from '../../models/forecast-data.model';

@Injectable()
export class ForecastDataEffect {
  constructor(
    private actions$: Actions,
    private forecastDataService: ForecastDataService
  ) {}

  getForecastData$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(loadForecastData),
      switchMap((action) => {
        return this.forecastDataService.getForecast(action.coords).pipe(
          switchMap((forecastData: CurrentLocationData[]) => {
            const currentWoeid: number | undefined = forecastData[0]?.woeid;
            const currentLocationForecast: string = `/api/location/${currentWoeid}/`;
            return this.forecastDataService
              .getCurrentForecast(currentLocationForecast)
              .pipe(
                switchMap((data: any) => {
                  return [setForecastData({ forecastData: data })];
                })
              );
          })
        );
      })
    );
  });
}
