import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginComponent } from './auth/login/login.page';
import { HomeComponent } from './home/home.page';
import { PagesRoutingModule } from './pages-routing.module';
import { RegisterComponent } from './auth/register/register.component';
import { StoreComponent } from './store/store.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, PagesRoutingModule],
  declarations: [
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    StoreComponent,
    ProductComponent,
  ],
})
export class PagesModule {}
