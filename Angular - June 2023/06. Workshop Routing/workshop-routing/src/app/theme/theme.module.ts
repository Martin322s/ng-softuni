import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemeContentComponent } from './theme-content/theme-content.component';
import { ThemeRoutingModule } from '../theme-routing.module';
// import { ThemesRoutingModule } from '../theme-routing.module';



@NgModule({
  declarations: [
    NewThemeComponent,
    ThemeContentComponent
  ],
  imports: [
    CommonModule,
    ThemeRoutingModule
  ]
})
export class ThemeModule { }
