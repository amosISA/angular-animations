import { Routes } from '@angular/router';
import { AboutComponent } from './components/about.component';
import { HomeComponent } from './components/home.component';
import { ProfileComponent } from './components/profile.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { animation: 'home' } },
  { path: 'about', component: AboutComponent, data: { animation: 'about' } },
  { path: 'profile', component: ProfileComponent, data: { animation: 'profile' } },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
