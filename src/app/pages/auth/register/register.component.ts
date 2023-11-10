import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router) {}
  confirmation: boolean = false;
  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
    },
    {
      text: 'OK',
      role: 'confirm',
    },
  ];

  confirmationRegister(event: CustomEvent) {
    if (event.detail.role == 'confirm') {
      this.router.navigate(['/login']);
    }
  }
  ngOnInit() {}

  saveUser() {}
}
