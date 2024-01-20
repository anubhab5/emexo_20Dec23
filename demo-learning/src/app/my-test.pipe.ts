import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myTest',
})
export class MyTestPipe implements PipeTransform {
  transform(value: string, discountPercent: number): string {
    const discountedPrice = Number(value) - discountPercent / 100;
    return discountedPrice.toString();
  }
}
