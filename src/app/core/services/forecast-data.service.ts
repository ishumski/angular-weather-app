import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ForecastDataService {

  constructor(private http: HttpClient) {}

  getForecast(param: string): Observable<Object> {
    const apiUrl: string = `/api/location/search/?${param}`;
    return this.http.get(apiUrl);
  }
}
