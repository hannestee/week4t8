import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parenthesis'
})
export class ParenthesisPipe implements PipeTransform {

  transform(nimi: string) :any {
    const index: number = nimi.indexOf('(');
    //console.log(index);
    //const remove: string = nimi.substring(index);
    //const nimi2 = nimi.slice(index);
    const nimi2 = nimi.substring(0, index);
    return nimi2;
  }

}
