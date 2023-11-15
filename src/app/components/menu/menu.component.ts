import { Component } from '@angular/core';
import { UserInfo } from 'src/app/models/userInfo';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserInfoService } from 'src/app/services/usert-info.service';
import { UtilsNavigationService } from 'src/app/services/utils-navigation.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  public selectedOption: string = '';
  public isDarkMode = false;
  public userInfo: UserInfo = new UserInfo();

  constructor(
    private auth: AuthenticationService,
    private utils: UtilsNavigationService,
    private userInfoService: UserInfoService
  ) {
    this.userInfoService.getUserObservable().subscribe((user: UserInfo) => {
      this.userInfo = user;
    });
  }

  public appPages = [
    { title: 'home', url: '/home', icon: 'home', click: () => {} },
    { title: 'loja', url: '/store', icon: 'bag', click: () => {} },
    { title: 'produtos', url: '/product', icon: 'albums', click: () => {} },
    {
      title: 'sair',
      url: '/login',
      icon: 'close',
      click: this.logout.bind(this),
    },
  ];

  isValidMenu(): boolean {
    return this.auth.isAuthenticated();
  }

  logout(): void {
    this.auth.disableAuth();
  }

  title() {
    return this.utils.getTile();
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
