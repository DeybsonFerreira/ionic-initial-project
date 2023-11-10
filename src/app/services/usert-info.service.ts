import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserInfo } from '../models/userInfo';

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  userSubject = new BehaviorSubject(<UserInfo>{});

  constructor() {}

  setUser(user: UserInfo) {
    this.userSubject.next(user);
  }

  getUserObservable(): Observable<UserInfo> {
    return this.userSubject.asObservable();
  }
}
