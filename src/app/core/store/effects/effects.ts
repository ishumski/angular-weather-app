import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
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
        return this.forecastDataService.getData().pipe(
          switchMap((forecastData: any) => {
            return [setForecastData({ forecastData })];
          })
        );
      })
    );
  });
}
