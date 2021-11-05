import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonStylesProps } from 'src/app/core/models/shared.model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() buttonStyles!: ButtonStylesProps;
  @Input() type!: string;
  @Input() label!: string;

  @Output() handleClick = new EventEmitter<void>();

  constructor() {}

  onClick() {
    this.handleClick.emit();
  }

  ngOnInit(): void {}
}
