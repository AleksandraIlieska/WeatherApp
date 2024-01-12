import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculationsService {

  constructor() { }

  //Calculate average, min, max
  CalculateStatistics(obj: any): { average: number; min: number; max: number } {

    if (obj && obj.values && obj.values.length > 0) {
      const sum = obj.values.reduce(
        (acc: number, value: number) => acc + value,
        0
      );
      const average = sum / obj.values.length;

      const min = Math.min(...obj.values);
      const max = Math.max(...obj.values);

      return { average, min, max };
    } else {
      return { average: 0, min: 0, max: 0 };
    }

  }

  //Find the warmest day
  WarmestDay(obj: any): string {
    if (obj && obj.temperatures && obj.temperatures.length > 0) {
      const warmestDay = Math.max(...obj.temperatures);
      return warmestDay.toString() + '°C';
    } else {
      return 'N/A';
    }
  }

  //Find the coldest day
  ColdestDay(obj: any): string {
    if (obj && obj.temperatures && obj.temperatures.length > 0) {
      const coldestDay = Math.min(...obj.temperatures);
      return coldestDay.toString() + '°C';
    } else {
      return 'N/A';
    }
  }
}
