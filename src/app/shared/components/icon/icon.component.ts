import { Component, Input} from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';


@Component({
  selector: 'amr-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent  {

  @Input()
  public name: IconProp | undefined;

  @Input()
  public ariaLabel: string | undefined;

  @Input()
  public ariaHidden = true;

}
