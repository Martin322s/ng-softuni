import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonToObject'
})
export class JsonToObjectPipe implements PipeTransform {
  transform(jsonString: string): any {
    try {
      return JSON.parse(jsonString);
    } catch (error) {
      console.log('Error parsing JSON:', error);
      return null;
    }
  }
}
