import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { PublishersComponent } from './pages/publishers/publishers.component';
import { AdvertisersComponent } from './pages/advertisers/advertisers.component';
import { AdvantagesComponent } from './pages/advantages/advantages.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'publishers', component: PublishersComponent },
  { path: 'advertisers', component: AdvertisersComponent },
  { path: 'advantages', component: AdvantagesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
