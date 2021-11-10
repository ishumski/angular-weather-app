import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-icon-template',
  templateUrl: './svg-icon-template.component.html',
  styleUrls: ['./svg-icon-template.component.scss'],
})
export class SvgIconTemplateComponent implements OnInit {
  @Input() width!: string;
  @Input() height!: string;
  @Input() viewBox!: string;
  @Input() fill!: string;
  @Input() d!: string;

  constructor() {}

  ngOnInit(): void {}
}
