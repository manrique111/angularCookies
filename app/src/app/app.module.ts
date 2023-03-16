import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookiesComponent } from './cookies/cookies.component';
import {NgxEncryptCookieService} from "ngx-encrypt-cookie";

@NgModule({
  declarations: [
    AppComponent,
    CookiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NgxEncryptCookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
