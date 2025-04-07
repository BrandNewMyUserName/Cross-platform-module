import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Fraction } from '../classes/fraction';
import { nonZeroValidator } from '../classes/nonZeroValidator';

@Component({
  selector: 'app-fraction-input',
  templateUrl: './fraction-input.component.html',
  styleUrls: ['./fraction-input.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule]
})
export class FractionInputComponent {
  @Output() calculate = new EventEmitter<{
    f1: Fraction;
    f2: Fraction;
    operation: string;
  }>();

  fractionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.fractionForm = this.fb.group({
      numerator1: [0, [Validators.required, Validators.pattern('^-?[0-9]*$')]],
      denominator1: [1, [
        Validators.required,
        Validators.pattern('^-?[0-9]*$'),
        nonZeroValidator
      ]],
      numerator2: [0, [Validators.required, Validators.pattern('^-?[0-9]*$')]],
      denominator2: [1, [
        Validators.required,
        Validators.pattern('^-?[0-9]*$'),
        nonZeroValidator
      ]],
      operation: ['add', Validators.required]
    });
  }
  
  onSubmit() {
    if (this.fractionForm.valid) {
      const { numerator1, denominator1, numerator2, denominator2, operation } = this.fractionForm.value;
      const f1: Fraction = { numerator: +numerator1, denominator: +denominator1 };
      const f2: Fraction = { numerator: +numerator2, denominator: +denominator2 };
      this.calculate.emit({ f1, f2, operation });
    }
  }
}


