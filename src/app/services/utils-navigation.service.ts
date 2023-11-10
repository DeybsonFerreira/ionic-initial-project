import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilsNavigationService {
  public titlePage = new BehaviorSubject(<string>'');

  constructor() {}

  setTitle(title: string): void {
    this.titlePage.next(title);
  }
  getTile(): string {
    return this.titlePage.getValue();
  }
}
