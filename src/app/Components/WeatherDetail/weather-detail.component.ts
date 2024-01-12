import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WeatherService } from '../../Services/weather.service';
import { catchError, throwError } from 'rxjs';
import { FavouritesService } from '../../Services/favourites.service';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.scss'],
})
export class WeatherDetailComponent {
  weatherData: any;
  cityFound: boolean = true;
  cityEntered: string = '';
  isButtonClicked: boolean = false;

  constructor(
    private weatherService: WeatherService,
    private favouritesService: FavouritesService
  ) { }

  GetWeatherDetail(cityName: string = ""): any {
    this.weatherService
      .LoadCurrentWeatherCity(cityName)
      .pipe(
        catchError((error) => {
          const statusCode = error.status;
          if (statusCode == 404) {
            this.cityFound = false;
            console.log('City not found, try again');
          }
          return throwError(error);
        })
      )
      .subscribe((resultObj: any) => {
        if (resultObj) {
          this.weatherData = resultObj;
          console.log(this.weatherData);
        }
      });
    //Clear the data from the previous search
    this.cityFound = true;
    this.weatherData = undefined;
    this.isButtonClicked = false;
  }

  //Add the entered city to favourites cities array
  AddToFavourites(cityName: string): void {
    this.favouritesService.AddToFavourites(cityName);
    console.log('City added to favourites:', cityName);
  }
}


