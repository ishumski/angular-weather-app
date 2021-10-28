import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadForecastData } from './core/store/actions/action';
import { ForecastInitialState } from './core/models/forecast-data.model';
import { ForecastDataService } from './core/services/forecast-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ForecastDataService],
})
export class AppComponent implements OnInit {
  constructor(private store: Store<ForecastInitialState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadForecastData());
  }
}
