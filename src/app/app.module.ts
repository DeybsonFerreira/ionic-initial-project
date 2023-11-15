import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PagesModule } from './pages/pages.module';
import { MenuComponent } from './components/menu/menu.component';
const mode: any = { ios: 'ios', android: 'md' };
@NgModule({
  declarations: [AppComponent, MenuComponent],
  imports: [
    IonicModule.forRoot({ mode: mode.ios }),
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    PagesModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
