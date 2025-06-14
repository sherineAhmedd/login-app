import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { MainLayoutComponent } from './Layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './Layouts/auth-layout/auth-layout.component';


export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '', component: MainLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent }
    ]
  },
  {
     path: '', component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent }
    ]
  }
];
