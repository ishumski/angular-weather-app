import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ForecastDataService {
  apiUrl: string =
    'https://www.metaweather.com/api/location/search/?query=london'
  // "https://swapi.dev/api/people/1/"

  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get(this.apiUrl);
  }
}
