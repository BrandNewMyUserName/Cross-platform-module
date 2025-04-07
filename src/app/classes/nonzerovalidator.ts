import { AbstractControl, ValidationErrors } from '@angular/forms';

export function nonZeroValidator(control: AbstractControl): ValidationErrors | null {
  return control.value === 0 ? { zeroNotAllowed: true } : null;
}
