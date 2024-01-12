import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
//Centralized and observable state for favourite cities for components to stay in sync with the latest changes
//Components subscribe to favouriteCities$ observable to receive updates
export class SharedStateService {
  //BehaviourSubject holds the current state of the favourite cities
  public favouriteCitiesSubject = new BehaviorSubject<any[]>([]);
  //Observable created from favouriteCitiesSubject.Expose favouriteCutuesSubject as observable.(Allows components to subscribe to current value and recieve updates when the value changes)
  //By using asObservable(), the service ensures that components subscribing to favouriteCities$ can only observe changes and cannot directly modify the state.
  favouriteCities$ = this.favouriteCitiesSubject.asObservable();

  AddToFavourites(city: any): void {
    //Retrieve the current value of the favouriteCitiesSubject
    const currentCities = this.favouriteCitiesSubject.value;

    //Check if the city is already in the list, avoid duplicated
    if (!currentCities.includes(city)) {
      //Create a new array by adding the new city to currentCities
      const updatedCities = [...currentCities, city];
      //Update the favouriteCitiesSubject with the new array by using next
      this.favouriteCitiesSubject.next(updatedCities);
    }
  }

  //Receive updates when the list of favourite cities changes 
  GetFavouriteCities(): Observable<any[]> {
    return this.favouriteCities$;
  }

  DeleteCityFromFavourites(cityName: string) {
    const currentCities = this.favouriteCitiesSubject.value;
    const updatedCities = currentCities.filter(item => item !== cityName);
    this.favouriteCitiesSubject.next(updatedCities);
  }
}