import { Routes } from '@angular/router';
import { HomeComponent } from './main-components/home/home.component';
import { RoomsComponent } from './main-components/rooms/rooms.component';
import { AboutUsComponent } from './main-components/about/about.component';
import { SigninComponent } from './main-components/signin/signin.component';
import { ProfileComponent } from './main-components/profile/profile.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: HomeComponent,  pathMatch: 'full'},
  {path:'rooms', component: RoomsComponent,  pathMatch: 'full'},
  {path:'about', component: AboutUsComponent,  pathMatch: 'full'},
  { path: 'signin', component: SigninComponent, pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent, pathMatch: 'full' } 
];