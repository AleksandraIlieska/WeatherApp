import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'temperatureRound'
})

export class TemperatureRoundPipe implements PipeTransform{
    transform(value:number):number {
        return Math.round(value); 
    }
}
