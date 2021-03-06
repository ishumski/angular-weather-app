import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() type!: string;
  @Input() buttonType!: string;
  @Input() label!: string;

  @Output() handleClick = new EventEmitter<void>();

  constructor() {}

  onClick() {
    this.handleClick.emit();
  }

  ngOnInit(): void {}
}
