import { Component, OnInit } from '@angular/core';
import { SharedStateService } from '../../Services/shared-state.service';
import { FavouritesService } from '../../Services/favourites.service';
import { Observable } from 'rxjs';
import { DialogAnimationsExampleDialogComponent } from '../Shared/Dialog-animations/dialog-animations.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-favourite-cities',
  templateUrl: './favourite-cities.component.html',
  styleUrls: ['./favourite-cities.component.css']
})

export class FavouriteCitiesComponent implements OnInit {
  favouriteCities: any[] = [];
  weatherData$!: Observable<any[]>;

  constructor(
    private sharedStateService: SharedStateService,
    private favouritesService: FavouritesService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    //Subscribe to favouriteCities$ to get updates
    this.sharedStateService.favouriteCities$.subscribe((cities) => {
      console.log('Favourite cities in component:', cities);
      this.favouriteCities = cities;

      //Call FavouritesService to get weather data
      this.weatherData$ = this.favouritesService.GetWeatherData(cities);
    });
  }

  DeleteCityFromFavourites(cityName: string): void {
    const dialogRef = this.dialog.open(DialogAnimationsExampleDialogComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result === true) {
        //When confirmed deletion(clicked Yes Button), call DeleteCityFromFavourites, else do nothing
        this.sharedStateService.DeleteCityFromFavourites(cityName);
      }
    });
  }
}