import { Directive, OnDestroy, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[ngModel][appNullOnHide]'
})
export class NullOnHideDirective implements OnDestroy {
  @Output() ngModelChange: EventEmitter<any> = new EventEmitter()

  ngOnDestroy() {
    this.ngModelChange.emit();
  }

  constructor() { }

}

