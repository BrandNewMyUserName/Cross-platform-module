import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FractionService } from '../services/fraction.service';
import { Fraction } from '../classes/fraction';
import { FractionInputComponent } from '../fraction-input/fraction-input.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FractionInputComponent]
})
export class HomePage {
  result: Fraction | null = null;

  constructor(private fractionService: FractionService) {}

  onCalculate(event: { f1: Fraction; f2: Fraction; operation: string }) {
    switch (event.operation) {
      case 'add':
        this.result = this.fractionService.add(event.f1, event.f2);
        break;
      case 'subtract':
        this.result = this.fractionService.subtract(event.f1, event.f2);
        break;
      case 'multiply':
        this.result = this.fractionService.multiply(event.f1, event.f2);
        break;
      case 'divide':
        this.result = this.fractionService.divide(event.f1, event.f2);
        break;
    }
  }
}
