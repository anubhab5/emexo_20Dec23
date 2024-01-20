import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ssMyTestDir]',
})
export class MyTestDirDirective {
  constructor(private elm: ElementRef) {
    debugger;
    this.elm.nativeElement.style.backgroundColor = 'yellow';
  }
}
