import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemeContentComponent } from './theme-content/theme-content.component';



@NgModule({
  declarations: [
    NewThemeComponent,
    ThemeContentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ThemeModule { }
