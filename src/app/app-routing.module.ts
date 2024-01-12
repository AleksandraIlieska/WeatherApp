import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/Login/login.component';
import { RegisterComponent } from './Components/Register/register.component';
import { AuthGuardService } from './Services/Auth/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    children: [
      {
        path: '',
        loadChildren: () => import('./Modules/Home/home-page.module').then(m => m.HomePageModule)
      }
    ]
  },
  {
    path: 'weather',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./Modules/WeatherDetail/weather-detail.module').then(m => m.WeatherDetailModule)
  },
  {
    path: 'hourly',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./Modules/HourlyDetail/hourly-detail.module').then(m => m.HourlyDetailModule)
  },
  {
    path: 'favourite',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./Modules/FavouriteCities/favourite-cities.module').then(m => m.FavouriteCitiesModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Modules/Login/login.module').then(m=>m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./Modules/Register/register.module').then(m => m.RegisterModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
