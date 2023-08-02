import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from '../home/home.component';
import { ListComponent } from '../list/list.component';
import { FooterComponent } from '../footer/footer.component';
import { HomeElementComponent } from '../home-element/home-element.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    FooterComponent,
    HomeElementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, HomeComponent, ListComponent, FooterComponent, HomeElementComponent]
})
export class AppModule { }
