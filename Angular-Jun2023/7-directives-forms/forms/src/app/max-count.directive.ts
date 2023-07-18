import { Directive, Input } from '@angular/core';
import {Validator, AbstractControl, ValidationErrors, NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[appMaxCount]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MaxCountDirective,
      multi: true
    }
  ]
})
export class MaxCountDirective implements Validator {
  @Input() appMaxCount: number | undefined;

  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    if(this.appMaxCount === undefined || control.value?.length <= this.appMaxCount) {
      return null;
    }

    return {
      appMaxCount: this.appMaxCount
    };

  }

}
