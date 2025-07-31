import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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

import { TypewriterTextDirective } from './pages/advertisers/typewriter-text.directive'; // Adjust path


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
    TypewriterTextDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
