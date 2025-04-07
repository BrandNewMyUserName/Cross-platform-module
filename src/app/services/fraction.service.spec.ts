import { TestBed } from '@angular/core/testing';
import { FractionService } from './fraction.service';
import { Fraction } from '../classes/fraction';

describe('FractionService', () => {
  let service: FractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should reduce 4/8 to 1/2', () => {
    const result = service.reduce({ numerator: 4, denominator: 8 });
    expect(result).toEqual({ numerator: 1, denominator: 2 });
  });

  it('should reduce -6/9 to -2/3', () => {
    const result = service.reduce({ numerator: -6, denominator: 9 });
    expect(result).toEqual({ numerator: -2, denominator: 3 });
  });

  it('should add 1/2 and 1/3 to get 5/6', () => {
    const f1: Fraction = { numerator: 1, denominator: 2 };
    const f2: Fraction = { numerator: 1, denominator: 3 };
    const result = service.add(f1, f2);
    expect(result).toEqual({ numerator: 5, denominator: 6 });
  });

  it('should subtract 3/4 - 1/2 to get 1/4', () => {
    const f1: Fraction = { numerator: 3, denominator: 4 };
    const f2: Fraction = { numerator: 1, denominator: 2 };
    const result = service.subtract(f1, f2);
    expect(result).toEqual({ numerator: 1, denominator: 4 });
  });

  it('should multiply 2/3 and 3/4 to get 1/2', () => {
    const f1: Fraction = { numerator: 2, denominator: 3 };
    const f2: Fraction = { numerator: 3, denominator: 4 };
    const result = service.multiply(f1, f2);
    expect(result).toEqual({ numerator: 1, denominator: 2 });
  });

  it('should divide 1/2 by 1/4 to get 2/1', () => {
    const f1: Fraction = { numerator: 1, denominator: 2 };
    const f2: Fraction = { numerator: 1, denominator: 4 };
    const result = service.divide(f1, f2);
    expect(result).toEqual({ numerator: 2, denominator: 1 });
  });

  it('should divide 3/4 by 2/5 to get 15/8', () => {
    const f1: Fraction = { numerator: 3, denominator: 4 };
    const f2: Fraction = { numerator: 2, denominator: 5 };
    const result = service.divide(f1, f2);
    expect(result).toEqual({ numerator: 15, denominator: 8 });
  });
});
