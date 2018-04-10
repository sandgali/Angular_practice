import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deletedupl'
})
export class DeleteduplPipe implements PipeTransform {
  transform(value:Array<string>): any {
    
      
 var unique_array= [];
var j,i;

for (i = 0; i < value.length; i++)
 {
  if(unique_array.indexOf(value[i]) == -1){
    unique_array.push(value[i])
      }
       }
    return unique_array;
};
  }
