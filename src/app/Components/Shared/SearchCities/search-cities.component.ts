import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-cities',
  templateUrl: './search-cities.component.html',
  styleUrls: ['./search-cities.component.css'],
})
export class SearchCitiesComponent {
  city?: string;

  @Input() FromWeatherDetail: boolean = false;
  @Output() HourlyDetail: EventEmitter<any> = new EventEmitter<any>();
  @Output() WeatherDetail: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  OnKey(value: string) {
    console.log(value);
    this.city = value;
  }

  GetDetails() {
    console.log(this.city);
    if (this.FromWeatherDetail) {
      this.WeatherDetail.emit(this.city);
    } else {
      this.HourlyDetail.emit(this.city);
    }
  }
}
