import { Component, DoCheck, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { UtilsNavigationService } from './services/utils-navigation.service';
import { UserInfoService } from './services/usert-info.service';
import { UserInfo } from './models/userInfo';
import { ViewDidEnter, ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public userInfo: UserInfo = new UserInfo();
  public appPages = [
    { title: 'home', url: '/home', icon: 'heart', click: () => {} },
    {
      title: 'sair',
      url: '/login',
      icon: 'heart',
      click: this.logout.bind(this),
    },
    { title: 'categoria', url: '/store', icon: 'heart', click: () => {} },
  ];
  constructor(
    private auth: AuthenticationService,
    private utils: UtilsNavigationService,
    private userInfoService: UserInfoService
  ) {
    this.userInfoService.getUserObservable().subscribe((user: UserInfo) => {
      this.userInfo = user;
    });
  }

  selectedOption: string = '';
  isDarkMode = false;

  isValidMenu(): boolean {
    return this.auth.isAuthenticated();
  }

  title() {
    return this.utils.getTile();
  }

  logout() {
    this.auth.disableAuth();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.body.setAttribute('theme', 'dark');
    } else {
      document.body.setAttribute('theme', 'light');
    }
  }
}
