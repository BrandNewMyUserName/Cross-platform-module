import { Injectable } from '@angular/core';
import { Fraction } from '../classes/fraction';

@Injectable({
  providedIn: 'root'
})
export class FractionService {
  // Greatest Common Divisor (GCD) for reduction
  private gcd(a: number, b: number): number {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) {
      const t = b;
      b = a % b;
      a = t;
    }
    return a;
  }

  // Reduce a fraction
  reduce(fraction: Fraction): Fraction {
    const divisor = this.gcd(fraction.numerator, fraction.denominator);
    return {
      numerator: fraction.numerator / divisor,
      denominator: fraction.denominator / divisor
    };
  }

  // Addition
  add(f1: Fraction, f2: Fraction): Fraction {
    const result = {
      numerator: f1.numerator * f2.denominator + f2.numerator * f1.denominator,
      denominator: f1.denominator * f2.denominator
    };
    return this.reduce(result);
  }

  // Subtraction
  subtract(f1: Fraction, f2: Fraction): Fraction {
    const result = {
      numerator: f1.numerator * f2.denominator - f2.numerator * f1.denominator,
      denominator: f1.denominator * f2.denominator
    };
    return this.reduce(result);
  }

  // Multiplication
  multiply(f1: Fraction, f2: Fraction): Fraction {
    const result = {
      numerator: f1.numerator * f2.numerator,
      denominator: f1.denominator * f2.denominator
    };
    return this.reduce(result);
  }

  // Division
  divide(f1: Fraction, f2: Fraction): Fraction {
    const result = {
      numerator: f1.numerator * f2.denominator,
      denominator: f1.denominator * f2.numerator
    };
    return this.reduce(result);
  }
}