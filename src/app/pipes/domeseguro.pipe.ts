import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'domeseguro'
})
export class DomeseguroPipe implements PipeTransform {
  constructor( private domsanatizer: DomSanitizer ){}
  transform(value: string, url: string): any {
    return this.domsanatizer.bypassSecurityTrustResourceUrl( url + value);
  }

}
