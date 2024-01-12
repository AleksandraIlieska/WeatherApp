import { CommonModule } from "@angular/common";
import { FavouriteCitiesComponent } from "../../Components/FavouriteCities/favourite-cities.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { WeatherService } from "../../Services/weather.service";
import { NgModule } from "@angular/core";
import { favouriteCities } from "./favourite-cities.routes";
import { SharedModule } from "../Shared/shared.module";
import { FavouritesService } from "../../Services/favourites.service";
import { DialogAnimationsExampleComponent, DialogAnimationsExampleDialogComponent } from "../../Components/Shared/Dialog-animations/dialog-animations.component";

@NgModule({
    declarations: [
        FavouriteCitiesComponent,
    ],
    providers: [
        WeatherService,
        FavouritesService
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(favouriteCities),
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        DialogAnimationsExampleComponent,
        DialogAnimationsExampleDialogComponent
    ]
})
export class FavouriteCitiesModule { }
