import { Component, Input, OnInit } from '@angular/core';
import {
  ButtonBorderWidth,
  ButtonColor,
  ButtonHeight,
  ButtonType,
} from './button.model';

@Component({
  selector: 'amr-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input()
  public type: ButtonType = 'button';

  @Input()
  public color: ButtonColor = 'primary';

  @Input()
  public borderWidth: ButtonBorderWidth = 'normal';

  @Input()
  public height: ButtonHeight = 'normal';

  @Input()
  public loading!: boolean;

  @Input()
  public disabled = false;

  constructor() {}

  ngOnInit(): void {}
}
