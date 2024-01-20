import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
})
export class DiscountPipe implements PipeTransform {
  transform(price: string, discount: string): string {
    const discountedPrice = (Number(price) - Number(discount) / 100).toString();
    return discountedPrice;
  }
}
