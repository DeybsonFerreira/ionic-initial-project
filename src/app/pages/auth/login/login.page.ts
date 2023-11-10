import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';
import { UserInfoService } from 'src/app/services/usert-info.service';
import { UserInfo } from 'src/app/models/userInfo';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginComponent implements OnInit {
  public username: string = '';
  public password: string = '';

  constructor(
    private router: Router,
    private auth: AuthenticationService,
    private userInfoService: UserInfoService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.username = 'admin';
    this.password = 'admin';
  }

  login() {
    let notification: Promise<HTMLIonToastElement>;
    if (this.username === 'admin' && this.password === 'admin') {
      //mock user
      let user: UserInfo = new UserInfo();
      user.email = 'deybson.10@hotmail.com';
      user.fullName = 'deybson ferreira';
      user.username = 'deybson';

      this.userInfoService.setUser(user);
      this.auth.enableAuth();

      notification = this.toastController.create({
        message: `Bem vindo!`,
        duration: 2000,
        position: 'top',
        positionAnchor: 'header',
        color: 'dark',
      });

      this.router.navigate(['/home']);
    } else {
      notification = this.toastController.create({
        message: 'Usuário incorreto!',
        duration: 2000,
        position: 'top',
        positionAnchor: 'header',
        color: 'danger',
      });
    }

    notification.then((func) => {
      func.present();
    });
  }
}
