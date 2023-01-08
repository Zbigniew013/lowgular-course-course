import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CheckboxModel } from '../model/checkbox.model';

@Injectable({ providedIn: 'root' })
export class CheckboxService {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<CheckboxModel[]> {
    return this._httpClient.get<CheckboxModel[]>(
      'https://fakestoreapi.com/products/categories'
    );
  }
}
