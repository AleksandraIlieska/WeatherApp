import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'temperatureConvert'
})

export class TemperatureConvertPipe implements PipeTransform {
    transform(value: number): number {
        return (value - 272.15);
    }
}