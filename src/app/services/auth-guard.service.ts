import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private _authService: AuthenticationService) {}

  canActivate(): boolean {
    return this._authService.isAuthenticated();
  }
}
