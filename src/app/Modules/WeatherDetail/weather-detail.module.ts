import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { WeatherDetailComponent } from '../../Components/WeatherDetail/weather-detail.component';
import { weatherDetailRoute } from './weather-detail.routes';
import { SharedModule } from '../Shared/shared.module';




@NgModule({
    declarations: [
        WeatherDetailComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(weatherDetailRoute),
        FormsModule,
        SharedModule,
    ],
    providers: [
    ],
    exports: [
        WeatherDetailComponent
    ]
})
export class WeatherDetailModule { }
