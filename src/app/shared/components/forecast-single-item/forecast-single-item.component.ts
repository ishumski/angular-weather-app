import { Component, Input, NgIterable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-forecast-single-item',
  templateUrl: './forecast-single-item.component.html',
  styleUrls: ['./forecast-single-item.component.scss'],
})
export class ForecastSingleItemComponent implements OnInit {
  @Input() selectFiveDaysForecast!: Observable<
    NgIterable<any> | null | undefined
  >;
  @Input() isFahrenheit!: boolean;

  constructor() {}

  ngOnInit(): void {}
}
