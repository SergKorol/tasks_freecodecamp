import {EventEmitter, Injectable} from '@angular/core';
import {ButtonsComponent} from './buttons/buttons.component';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

buffer = '';
result = '';
command: any;


onPress: EventEmitter<any> = new EventEmitter();



onNumber(num) {
  if (this.command) {
    this.buffer = this.buffer + num;
  } else {
    this.result = this.result + num;
  }
}

onOperator(operator) {
  this.command = operator;
}

onCompute() {
  if (this.command) {
    if (this.command === '+') {
      this.result = this.add(Number(this.result), Number(this.buffer));
      return this.result;
    }
    if (this.command === '-') {
      this.result = String(this.substruct(Number(this.result), Number(this.buffer)));
    }
    if (this.command === '*') {
      this.result = String(this.multiply(Number(this.result), Number(this.buffer)));
    }
    if (this.command === '/') {
      this.result = String(this.divide(Number(this.result), Number(this.buffer)));
    }
    if (this.command === 'c') {
      this.buffer = '';
      return this.result = '';
    }
    return this.buffer = '';


  }
}

onClear() {
  this.buffer = ' ';
  this.result = ' ';
}

add(n1: any, n2: any) {
  this.result = n1;
  this.buffer = n2;
  return n1 + n2;
}

  substruct(n1: any, n2: any) {
    this.result = n1;
    this.buffer = n2;
    return n1 - n2;
  }

  multiply(n1: any, n2: any) {
    this.result = n1;
    this.buffer = n2;
    return n1 * n2;
  }

  divide(n1: any, n2: any) {
    this.result = n1;
    this.buffer = n2;
    return n1 / n2;
  }


}
