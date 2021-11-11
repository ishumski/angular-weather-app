import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-forecast-info',
  templateUrl: './forecast-info.component.html',
  styleUrls: ['./forecast-info.component.scss'],
})
export class ForecastInfoComponent implements OnInit {
  @Input() title!: string | null;
  @Input() value!: Observable<any> | null | undefined;
  @Input() text!: string | null;

  constructor() {}

  ngOnInit(): void {}
}
