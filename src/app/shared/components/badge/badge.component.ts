import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent implements OnInit {
  @Input() type!: string;
  @Input() src!: string;
  @Input() alt!: string;

  @Output() handleClick = new EventEmitter<void>();

  constructor() {}

  onClick() {
    this.handleClick.emit();
  }

  ngOnInit(): void {}
}
