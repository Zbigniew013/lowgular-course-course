import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-single-list-names',
  templateUrl: './single-list-names.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleListNamesComponent {
  names = ['Tom', 'Andrew', 'Chris', 'Peter'];
}
