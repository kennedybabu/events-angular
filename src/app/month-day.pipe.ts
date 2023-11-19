import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monthDay'
})
export class MonthDayPipe implements PipeTransform {
  

  transform(value: Date, ...args: unknown[]): unknown {
    let eventDate = value.getDay()
    let eventMonth = value.getMonth() 

    let objectDate = {
      "date": eventDate,
      "month": eventMonth
    }
    return objectDate;
  }

}
