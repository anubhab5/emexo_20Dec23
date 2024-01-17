import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ssDemoDirective]',
})
export class DemoDirectiveDirective {
  constructor(private elRef: ElementRef) {}
}
