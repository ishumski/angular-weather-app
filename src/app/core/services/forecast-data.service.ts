import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ForecastDataService {
  apiUrl: string = '/api/location/search/?lattlong=53.723142,23.8400063';

  constructor(private http: HttpClient) {}

  getData(): Observable<Object> {
    return this.http.get(this.apiUrl);
  }
}
