import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeatherService } from './Services/weather.service';
import { HttpClientModule } from '@angular/common/http';
import { NavbarModule } from './Modules/Shared/navbar.module';
import { FavouritesService } from './Services/favourites.service';
import { WeatherAppDbConfig } from './Configs/weatherapp-db-config';
import { NgxIndexedDBModule } from 'ngx-indexed-db';
import { IndexedDbService } from './Services/indexed-db.service';
import { CommonModule } from '@angular/common';
import { NgToastModule } from 'ng-angular-popup';
import { AuthGuardService } from './Services/Auth/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    NavbarModule,
    NgxIndexedDBModule.forRoot(WeatherAppDbConfig),
    NgToastModule,
  ],
  providers: [
    WeatherService,
    FavouritesService,
    IndexedDbService, 
    AuthGuardService, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
