import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { SharedModule } from "./shared/shared.module";
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
    declarations: [
        AppComponent,
        UserDetailsComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CoreModule,
        HttpClientModule,
        UserModule,
        PostModule,
        SharedModule
    ]
})

export class AppModule { }
