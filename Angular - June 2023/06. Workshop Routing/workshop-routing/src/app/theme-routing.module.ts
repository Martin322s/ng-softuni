import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NewThemeComponent } from './theme/new-theme/new-theme.component';
import { ThemeContentComponent } from './theme/theme-content/theme-content.component';
import { AuthActivate } from './core/guards/activateGuard';

const routes: Routes = [
  {
    path: 'themes',
    pathMatch: 'full',
    component: MainComponent
  },
  {
    path: 'create',
    pathMatch: 'full',
    component: NewThemeComponent,
    canActivate: [AuthActivate]
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