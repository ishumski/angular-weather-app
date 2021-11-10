import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadForecastData } from './core/store/actions/action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  getCurrentGeoposition() {
    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        const { latitude, longitude } = position.coords;

        const fixedLatitude: number = parseFloat(latitude.toFixed(2));
        const fixedLongitude: number = parseFloat(longitude.toFixed(2));

        const currentGeolocationByCoords: string = `lattlong=${fixedLatitude},${fixedLongitude}`;

        this.store.dispatch(
          loadForecastData({ coords: currentGeolocationByCoords })
        );
      }
    );
  }

  ngOnInit(): void {
    this.getCurrentGeoposition();
  }
}
