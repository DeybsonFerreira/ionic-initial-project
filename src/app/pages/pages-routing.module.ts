import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.page';
import { AuthGuardService } from '../services/auth-guard.service';
import { LoginComponent } from './auth/login/login.page';
import { RegisterComponent } from './auth/register/register.component';
import { StoreComponent } from './store/store.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'store',
    component: StoreComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'product',
    component: ProductComponent,
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
