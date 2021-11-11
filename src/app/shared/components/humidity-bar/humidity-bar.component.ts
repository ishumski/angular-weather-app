import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-humidity-bar',
  templateUrl: './humidity-bar.component.html',
  styleUrls: ['./humidity-bar.component.scss'],
})
export class HumidityBarComponent implements OnInit {
  @Input() selectHumidity!: Observable<number | undefined>;

  constructor() {}

  ngOnInit(): void {}
}
