import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../Services/weather.service';
import { catchError, take, throwError } from 'rxjs';

@Component({
  selector: 'app-hourly-detail',
  templateUrl: './hourly-detail.component.html',
  styleUrls: ['./hourly-detail.component.css'],
})
export class HourlyComponent {
  hourlyData: any = undefined;
  cityFound: boolean = true;

  columns?: string[];

  currentSortState: number = 0;

  sortColumn: string = '';
  sortOrder: string = ''; //initial sorting
  order: string = ''; //Connect order property to the pipe

  constructor(private weatherService: WeatherService) {}

  GetHourlyDetail(cityName: string = ''): void {
    this.weatherService
      .LoadForecastCity(cityName)
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
          this.hourlyData = resultObj;
          console.log(this.hourlyData);
        }
      });
    this.cityFound = true;
    this.hourlyData = undefined; //Clear the data from the previous search
  }

  changeOrderOnClick(field: string): void {
    // Reset the sorting state on click
    if (this.sortColumn !== field) {
      this.currentSortState = 1;
    } else {
      // Increment the sorting state on each click for the same field
      this.currentSortState = (this.currentSortState + 1) % 3;
    }

    // Set the sorting order based on the current state
    if (this.currentSortState === 0) {
      this.sortOrder = '';
      this.sortColumn = '';
    } else if (this.currentSortState === 1) {
      this.sortColumn = field;
      this.sortOrder = 'asc';
    } else {
      this.sortColumn = field;
      this.sortOrder = 'desc';
    }

    // Update the order property in the pipe based on the sorting order
    this.order =
      this.sortOrder === 'asc'
        ? 'asc'
        : this.sortOrder === 'desc'
        ? 'desc'
        : '';
  }
}
