import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { HomeComponent } from './home/home.component';
import { AuthActivate } from './core/guards/activateGuard';

const routes: Routes = [
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent,
    canActivate: [AuthActivate]
  },
  {
    path: 'register',
    pathMatch: 'full',
    component: RegisterComponent,
    canActivate: [AuthActivate]
  },
  {
    path: 'profile',
    pathMatch: 'full',
    component: ProfileComponent,
    canActivate: [AuthActivate]
  },
  {
    path: 'logout',
    pathMatch: 'full',
    component: HomeComponent,
    canActivate: [AuthActivate]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }