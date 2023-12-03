import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserRoutingModule } from '../user-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  // Which components to be exported from this module
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }