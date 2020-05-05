import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
  name: "limitTo",
})
export class LimitToPipe implements PipeTransform {
  transform(value: string, substringLength: number) {
    if (value.length === 0 || value.length < substringLength) {
      return value;
    }
    return value.substring(0, substringLength);
  }
}
