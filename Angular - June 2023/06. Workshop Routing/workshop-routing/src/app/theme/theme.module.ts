import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemeContentComponent } from './theme-content/theme-content.component';
import { ThemeRoutingModule } from '../theme-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    NewThemeComponent,
    ThemeContentComponent,
    WelcomeComponent,
  ],
  imports: [
    CommonModule,
    ThemeRoutingModule,
    BrowserModule,
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ThemeModule { }
