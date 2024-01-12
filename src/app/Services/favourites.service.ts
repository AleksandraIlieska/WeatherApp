import { Injectable } from '@angular/core';
import { SharedStateService } from './shared-state.service';
import { WeatherService } from './weather.service';
import { Observable, forkJoin, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavouritesService {
  constructor(
    private sharedStateService: SharedStateService,
    private weatherService: WeatherService
  ) { }

  AddToFavourites(city: any): void {
    //when adding new city to favourites, AddToFavourites method from the SharedStateService is called, which updates the shared state and notifies subscribers
    this.sharedStateService.AddToFavourites(city);

    // Log the updated array after adding a city, but only take the first emission
    this.sharedStateService.favouriteCities$
      .pipe(take(1))
      .subscribe((cities) => {
        console.log('Updated array with favourite cities:', cities);

        // Extract city names from the array of objects using map and filter functions
        const cityNames = cities.map((c) => c.name).filter((name) => !!name); // Adjust 'name' to the actual property name
      });
  }

  GetFavouriteCities(): any[] {
    const cities = this.sharedStateService.favouriteCitiesSubject.value;
    console.log('Favourite cities in service:', cities);
    return cities;
  }

  //Mapping each city name from the array cityNames to the LoadCurrentWeatherCity method from WeatherService
  GetWeatherData(cityNames: string[]): Observable<any[]> {
    const weatherDataObservables = cityNames.map((cityName) =>
      this.weatherService.LoadCurrentWeatherCity(cityName)
    );
    //Using forkJoin from RxJS to combine these observables into a single observable that emits an array of weather data when all individual observables complete (because fetching weather data for multiple cities is asynchronous)
    return forkJoin(weatherDataObservables);
  }
}