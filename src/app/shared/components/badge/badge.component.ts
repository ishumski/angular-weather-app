import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent implements OnInit {
  @Input() isPrimaryBadgeWrapper!: boolean;
  @Input() isSecondaryBadgeWrapper!: boolean;
  @Input() isTertiaryBadgeWrapper!: boolean;
  @Input() src!: string;
  @Input() alt!: string;

  @Output() handleClick = new EventEmitter<void>();

  constructor() {}

  onClick() {
    this.handleClick.emit();
  }

  ngOnInit(): void {}
}
