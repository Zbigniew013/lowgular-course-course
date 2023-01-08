import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CheckboxModel } from '../../model/checkbox.model';
import { CheckboxService } from '../../services/checkbox.service';

@Component({
  selector: 'app-single-menu-categories',
  templateUrl: './single-menu-categories.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleMenuCategoriesComponent {
  readonly menu$: Observable<CheckboxModel[]> = this._checkboxService.getAll();

  constructor(private _checkboxService: CheckboxService) {
  }
}
