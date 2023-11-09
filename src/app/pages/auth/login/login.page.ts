import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginComponent implements OnInit {
  public username: string = '';
  public password: string = '';

  constructor(private router: Router, private auth: AuthenticationService) {}

  ngOnInit() {
    this.username = 'admin';
    this.password = 'admin';
  }

  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      this.auth.enableAuth();
      this.router.navigate(['/home']);
    } else {
    }
  }
}
