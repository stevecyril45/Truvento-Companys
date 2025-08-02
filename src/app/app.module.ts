import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { PublishersComponent } from './pages/publishers/publishers.component';
import { AdvertisersComponent } from './pages/advertisers/advertisers.component';
import { AdvantagesComponent } from './pages/advantages/advantages.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

import { TypewriterTextDirective } from './pages/advertisers/typewriter-text.directive';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginDashboardComponent } from './core/login-dashboard/login-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    PublishersComponent,
    AdvertisersComponent,
    AdvantagesComponent,
    AboutComponent,
    ContactComponent,
    TypewriterTextDirective,
    DashboardComponent,
    LoginComponent,
    LoginDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
      HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
