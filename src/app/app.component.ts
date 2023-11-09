import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'home', url: '/home', icon: 'heart', click: () => {} },
    {
      title: 'sair',
      url: '/login',
      icon: 'heart',
      click: this.logout.bind(this),
    },
  ];
  constructor(private auth: AuthenticationService) {}

  isValidMenu(): boolean {
    return this.auth.isAuthenticated();
  }

  logout() {
    console.log('saiu');
    this.auth.disableAuth();
  }
}
