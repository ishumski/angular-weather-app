import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { loadForecastData, setForecastData } from '../actions/action';
import { ForecastDataService } from '../../services/forecast-data.service';
import { CurrentLocationData } from '../../models/forecast-data.model';

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
          .getForecast(`lattlong=53.72,23.84`)
          .pipe(
            switchMap((forecastData: any) => {
              const currentWoeid: number = forecastData[0].woeid;
              console.log('forecastData', forecastData);
              console.log('currentWoeid', currentWoeid);
              // const currentLocationForecast: string = `/api/location/${currentWoeid}/`;
              // return this.forecastDataService
              //   .getForecast(`${currentWoeid}`)
              //   .pipe(
              //     switchMap((data: any) => {
              //       console.log('data', data);
              //       return [setForecastData({ forecastData: data })];
              //     })
              //   );
              return [setForecastData({ forecastData: forecastData[0] })];
            })
          );
      })
    );
  });
}
