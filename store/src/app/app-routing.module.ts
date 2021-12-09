import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { AuthguardGuard } from './authguard.guard';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path : 'login-page', component: LoginPageComponent},
  {path : 'home-page', component: HomePageComponent,canActivate: [AuthguardGuard]},
  {path: 'register-page', component: RegisterPageComponent},
  {path: 'cart', component: CartComponent},
  { path: 'dashboard', component: DashboardComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
