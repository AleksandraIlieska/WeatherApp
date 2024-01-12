// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { WeatherService } from '../../Services/weather.service';
import { HomePageComponent } from '../../Components/HomePage/home-page.component';
import { homePage } from './home-page.routes';

@NgModule({
    declarations: [
        HomePageComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(homePage),
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [
        WeatherService
    ]
})
export class HomePageModule { }
