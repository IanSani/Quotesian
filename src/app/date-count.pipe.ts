import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any, args?: any): number {
    let today:Date =new Date();//get current date and AppRoutingModule//
    let todayWithNOTime:any =new Date(today.getFullYear(),today.getmonth(),today.getDate())
    var dateDifference=Math.abs(value-todayWithNoTIme)
    const secondsInADay=86400;

    var dateDifferenceSeconds=dateDifference*0.001;

    if  (dateCounter>= 1 && value > todayWithNoTime){
      return dateCounter;
    }else{
      return 0;
    }
  }

}
