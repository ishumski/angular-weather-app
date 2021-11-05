import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CurrentLocationData} from '../models/forecast-data.model';

@Injectable({
  providedIn: 'root',
})
export class ForecastDataService {
  constructor(private http: HttpClient) {}

  getForecast(param: string): Observable<CurrentLocationData[]> {
    const apiUrl: string = `/api/location/search/?${param}`;
    return this.http.get<CurrentLocationData[]>(apiUrl);
  }

  getCurrentForecast(param: string) {
    const apiUrl: string = `/api/location/${param}`;
    return this.http.get(apiUrl);
  }
}
