import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { AuthGuard } from './core/services/auth.guard';

import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { PublishersComponent } from './pages/publishers/publishers.component';
import { AdvertisersComponent } from './pages/advertisers/advertisers.component';
import { AdvantagesComponent } from './pages/advantages/advantages.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';// Adjust path
import { LoginComponent } from './pages/login/login.component';
import { LoginDashboardComponent } from './core/login-dashboard/login-dashboard.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'publishers', component: PublishersComponent },
  { path: 'advertisers', component: AdvertisersComponent },
  { path: 'advantages', component: AdvantagesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }, // Add dashboard route,
  {path: 'login', component: LoginComponent},
  { path: 'login-dashboard', component: LoginDashboardComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'login-dashboard', pathMatch: 'full' },
];
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled', // <-- This scrolls to top on route change
  anchorScrolling: 'enabled'
};
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
