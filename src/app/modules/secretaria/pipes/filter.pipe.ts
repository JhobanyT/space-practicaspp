import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 2) return value;
    const resultSolicitudes = [];
    for (const solicitud of value) {
      if (solicitud.estado_solicitud.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultSolicitudes.push(solicitud);
      };
    };
    return resultSolicitudes;
  }

}
