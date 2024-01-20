import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ssHighlighter]',
})
export class HighlighterDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}
