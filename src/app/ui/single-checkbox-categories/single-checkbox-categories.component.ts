import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CheckboxModel } from '../../model/checkbox.model';
import { CheckboxService } from '../../services/checkbox.service';

@Component({
  selector: 'app-single-checkbox-categories',
  templateUrl: './single-checkbox-categories.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleCheckboxCategoriesComponent {
  readonly checkbox$: Observable<CheckboxModel[]> = this._checkboxService.getAll();

  constructor(private _checkboxService: CheckboxService) {
  }
}
