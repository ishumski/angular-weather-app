import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fahrenheit',
  templateUrl: './fahrenheit.component.html',
  styleUrls: ['./fahrenheit.component.scss'],
})
export class FahrenheitComponent implements OnInit {
  @Input() fill!: string;
  constructor() {}

  ngOnInit(): void {}
}
