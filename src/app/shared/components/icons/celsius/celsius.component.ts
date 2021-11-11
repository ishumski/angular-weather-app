import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-celsius',
  templateUrl: './celsius.component.html',
  styleUrls: ['./celsius.component.scss'],
})
export class CelsiusComponent implements OnInit {
  @Input() fill!: string;
  constructor() {}

  ngOnInit(): void {}
}
