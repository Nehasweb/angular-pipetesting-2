import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: number): boolean{
    if((value % 2) == 0)
    {
    return true;
    }
    else {
      return false ;
    }
  }

}

