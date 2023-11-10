import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilsNavigationService } from 'src/app/services/utils-navigation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomeComponent implements OnInit {
  public home!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor(private utils: UtilsNavigationService) {}

  ngOnInit() {
    this.utils.setTitle('Inicio');
    this.home = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}
