import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AsideComponent } from './aside/aside.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ThemeDetailsComponent } from './theme-details/theme-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    AsideComponent,
    NotFoundComponent,
    MainComponent,
    LoginComponent,
    NewThemeComponent,
    ProfileComponent,
    RegisterComponent,
    ThemeDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent, FooterComponent]
})
export class AppModule { }
