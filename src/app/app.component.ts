import { Component, OnInit } from '@angular/core';
import { ForecastDataService } from './core/services/forecast-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ForecastDataService],
})
export class AppComponent implements OnInit {
  title = 'angular-weather-app';

  constructor(private forecastDataService: ForecastDataService) { }
  ngOnInit() {
    this.forecastDataService.getData().subscribe((data: any) => {
      return console.log(data);
    });
  }
}
