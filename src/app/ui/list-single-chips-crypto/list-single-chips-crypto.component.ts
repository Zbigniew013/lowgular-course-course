import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { CryptoModel } from '../../model/crypto.model';
import { CryptoService } from '../../services/crypto.service';

@Component({
  selector: 'app-list-single-chips-crypto',
  templateUrl: './list-single-chips-crypto.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListSingleChipsCryptoComponent {
  readonly crypto$: Observable<CryptoModel[]> = this._cryptoService.getAll();

  constructor(private _cryptoService: CryptoService) {}
}
