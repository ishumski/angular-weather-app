import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadForecastData } from '../../store/actions/action';
import { selectWoeid } from '../../store/selectors/selector';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  woeid$!: Observable<number>;

  constructor(private store: Store) {
    this.woeid$ = store.select(selectWoeid);
  }

  // getCurrentGeoposition() {
  //   navigator.geolocation.getCurrentPosition(
  //     (position: GeolocationPosition) => {
  //       const { latitude, longitude } = position.coords;

  //       const fixedLatitude: number = parseFloat(latitude.toFixed(2));
  //       const fixedLongitude: number = parseFloat(longitude.toFixed(2));
  //       console.log(fixedLatitude, fixedLongitude);
  //     }
  //   );
  // }

  ngOnInit(): void {
    // this.getCurrentGeoposition();
    this.store.dispatch(loadForecastData());
  }
}
