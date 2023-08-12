import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReducePipe } from './reduce.pipe';
import { AppInterceptorProvider } from './app.inetrceptor';
import { HttpClientModule } from '@angular/common/http';
import { LazyComponent } from './lazy/lazy/lazy.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ReducePipe,
    LazyComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AppInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
