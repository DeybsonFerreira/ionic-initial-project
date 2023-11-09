import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  authenticationState = new BehaviorSubject(false);

  constructor() {}

  enableAuth() {
    this.authenticationState.next(true);
  }
  disableAuth() {
    this.authenticationState.next(false);
  }
  isAuthenticated(): boolean {
    return this.authenticationState.value;
  }

  checkToken() {}
}
