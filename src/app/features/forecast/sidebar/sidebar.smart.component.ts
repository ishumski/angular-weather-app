import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as selectors from '../../../core/store/selectors/selector';

@Component({
  selector: 'app-sidebar-smart',
  template: `<app-sidebar-presentation
    [title]="this.title$ | async"
    [temp]="this.temp$ | async"
    [weatherStateName]="this.weatherStateName$ | async"
    [selectWeatherStateAbbr]="this.selectWeatherStateAbbr$ | async"
    [currentDate]="this.currentDate | date: 'EEE, d MMM'"
  ></app-sidebar-presentation>`,
})
export class SidebarSmartComponent implements OnInit {
  title$: Observable<string | undefined>;
  temp$: Observable<number | undefined>;
  weatherStateName$: Observable<string | undefined>;
  selectWeatherStateAbbr$: Observable<string | undefined>;

  currentDate: Date = new Date();

  constructor(private store: Store) {
    this.title$ = store.select(selectors.selectTitle);
    this.temp$ = store.select(selectors.selectTemp);
    this.weatherStateName$ = store.select(selectors.selectWeatherStateName);
    this.selectWeatherStateAbbr$ = store.select(
      selectors.selectWeatherStateAbbr
    );
  }

  ngOnInit(): void {}
}
