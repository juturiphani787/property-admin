import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: '_filter'
})
export class FilterPipe implements PipeTransform {

  transform(values: any[], args: any ): Array<any> {
    return values.filter(value => {
      let condition = true;
      args.forEach((arg: any) => {
        let fields = arg.fields;
        let subcon = false;
        for (const key in value) {
          if (value.hasOwnProperty(key) && fields.includes(key)) {
            const element = value[key];
            subcon = subcon || value[key]?.toLowerCase().match(arg['value']?.toLowerCase());
          }
        }
        condition = condition && subcon;
      });
      return condition;
    });
  }

}
