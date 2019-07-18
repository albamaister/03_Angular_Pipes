import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activar'
})
export class ActivarPipe implements PipeTransform {

  transform(value: string, activar: boolean = true ): string {
    let salida = '';
    if ( activar )
    {
      for (let i = 0; i < value.length; i++) {
        salida = salida + '*';
      }
      return salida;
    } else {
      return value;
    }
  }

}
