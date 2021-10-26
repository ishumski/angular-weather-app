import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ForecastDataService {
  apiUrl: string = '/api/location/search/?query=london';

  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get(this.apiUrl);
  }
}
