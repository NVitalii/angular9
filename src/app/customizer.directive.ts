import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appCustomizer]'
})
export class CustomizerDirective {

  @Input() className: string;

  @HostListener('mouseenter')
  enableError(): void {
    this.el.nativeElement.querySelector('#title')
      .classList.add(this.className);
  }

  @HostListener('mouseleave')
  disableError(): void {
    this.el.nativeElement.querySelector('#title')
      .classList.remove(this.className);
  }

  constructor(private el: ElementRef) {
  }

}
