import { AfterContentInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[licky-auto-focus]'
})
export class AutoFocusDirective implements AfterContentInit {

  public constructor(private el: ElementRef) {

  }

  public ngAfterContentInit() {

    setTimeout(() => {

      this.el.nativeElement.focus();

    }, 500);

  }

}
