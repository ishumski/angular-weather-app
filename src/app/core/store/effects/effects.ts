import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadForecastData, setForecastData } from '../actions/action';
import { ForecastDataService } from '../../services/forecast-data.service';

@Injectable({
  providedIn: 'root',
})
export class ForecastDataEffect {
  constructor(
    private actions$: Actions,
    private forecastDataService: ForecastDataService
  ) {}

  getForecastData$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(loadForecastData),
      switchMap((): Observable<Object> => {
        return this.forecastDataService
          .getForecast('lattlong=53.72,23.84')
          .pipe(
            switchMap((forecastData: any) => {
              const currentWoeid: number = forecastData[0].woeid;
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
