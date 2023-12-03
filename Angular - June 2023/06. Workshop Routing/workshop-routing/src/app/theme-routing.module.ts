import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { MainComponent } from './main/main.component';
import { NewThemeComponent } from './theme/new-theme/new-theme.component';
import { ThemeContentComponent } from './theme/theme-content/theme-content.component';

const routes: Routes = [
  {
    path: 'themes',
    pathMatch: 'full',
    component: MainComponent
  },
  {
    path: 'create',
    pathMatch: 'full',
    component: NewThemeComponent
  },
  {
    path: 'profile',
    pathMatch: 'full',
    component: RegisterComponent
  },
  {
    path: ':themeId',
    pathMatch: 'full',
    component: ThemeContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule { }