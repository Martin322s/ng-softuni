import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemeContentComponent } from './theme-content/theme-content.component';
import { ThemeRoutingModule } from '../theme-routing.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    NewThemeComponent,
    ThemeContentComponent,
  ],
  imports: [
    CommonModule,
    ThemeRoutingModule,
    BrowserModule,
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ThemeModule { }
