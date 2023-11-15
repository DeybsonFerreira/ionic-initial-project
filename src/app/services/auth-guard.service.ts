import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  constructor(private _authService: AuthenticationService) {}

  canActivate(): boolean {
    return this._authService.isAuthenticated();
  }
}
