import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], searchText: string, propertyName: string): any {
    if (value.length === 0 || searchText.length === 0) {
      return value;
    }
    return value.filter((val) => {
      return val[propertyName].toLowerCase().includes(searchText);
    });
  }
}
