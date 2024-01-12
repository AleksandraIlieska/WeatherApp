import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class WeatherService {
  private API_KEY: string = 'b70cce64d6f603bb8a5383cb487ed4b7';
  private API_URL: string = 'https://api.openweathermap.org/data/2.5/';

  constructor(private httpClient: HttpClient) { }

  LoadCurrentWeatherCity(cityName: string): Observable<any> {
    return this.httpClient.get(
      `${this.API_URL}weather?q=${cityName}&APPID=${this.API_KEY}`
    );
  }

  LoadForecastCity(cityName: string): Observable<any> {
    return this.httpClient.get(
      `${this.API_URL}forecast?q=${cityName}&units=metric&APPID=${this.API_KEY}`
    );
  }
}

