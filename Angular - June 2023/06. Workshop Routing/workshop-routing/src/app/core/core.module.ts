import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserRoutingModule } from '../user-routing.module';
import { ThemeRoutingModule } from '../theme-routing.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ThemeRoutingModule,
    AppRoutingModule
  ],
  // Which components to be exported from this module
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }