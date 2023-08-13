import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemeDetailsComponent } from './theme-details/theme-details.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'users/register', component: RegisterComponent },
    { path: 'users/login', component: LoginComponent },
    { path: 'users/profile', component: ProfileComponent },
    { path: 'themes', component: HomeComponent },
    { path: 'new-theme', component: NewThemeComponent },
    { path: 'details/:id', component: ThemeDetailsComponent },
    { path: 'edit/profile', component: EditProfileComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }