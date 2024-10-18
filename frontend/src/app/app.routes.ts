import { Routes } from '@angular/router';
import { MainComponent } from './home/main/main.component';
import { LoginComponent } from './home/login/login.component';
import { AboutComponent } from './home/about/about.component';
import { VideosComponent } from './home/videos/videos.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: MainComponent, children: [
    {path: '', component: VideosComponent},
    {path: 'login', component: LoginComponent},
    {path:'about', component: AboutComponent}
  ]},
];