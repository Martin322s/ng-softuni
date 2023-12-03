import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemeContentComponent } from './theme-content/theme-content.component';
import { ThemesRoutingModule } from '../user-routing.module';



@NgModule({
  declarations: [
    NewThemeComponent,
    ThemeContentComponent
  ],
  imports: [
    CommonModule,
    ThemesRoutingModule
  ]
})
export class ThemeModule { }
