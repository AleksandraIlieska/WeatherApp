import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchCitiesComponent } from '../../Components/Shared/SearchCities/search-cities.component';
import { TemperatureConvertPipe } from '../../Pipes/temperature-convert.pipe';
import { TemperatureRoundPipe } from '../../Pipes/temperature-round.pipe';

@NgModule({
  declarations: [
    SearchCitiesComponent,
    TemperatureConvertPipe,
    TemperatureRoundPipe,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    SearchCitiesComponent,
    TemperatureConvertPipe,
    TemperatureRoundPipe,
  ],
})
export class SharedModule {}
