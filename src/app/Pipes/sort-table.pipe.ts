import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortTable',
  pure: true,
})
export class SortTablePipe implements PipeTransform {
  transform(list: any[], sortColumn: string, order: string): any[] {
    //using [...list] to create new array with the same elements, as the original array (list.slice().sort...)
    let sortedArray = [...list].sort((a, b) => {
      if (order === 'desc') {
        return b.main[sortColumn] - a.main[sortColumn];
      } else if (order === 'asc') {
        return a.main[sortColumn] - b.main[sortColumn];
      }
      return 0;
    });
    return sortedArray;
  }
}
