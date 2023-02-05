import { Component, Input } from '@angular/core';

@Component({
  selector: 'amr-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {
  @Input()
  public type: 'ellipsis' | 'ring' | 'double-bounce' = 'ellipsis';

  constructor() {}
}
