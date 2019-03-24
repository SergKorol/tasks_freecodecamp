import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { format } from 'util';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  buffer: any;
  tmp: string;
  checker: string;
  regExp: RegExp = new RegExp('[-+*/]', 'g');
  constructor() { this.buffer = ''; this.current = ''; }
  @Output() res = new EventEmitter();
  current: any;
 /* display = [];
  joined: any;
  tempResult: any;
  result = [];
  input = [];
  endResult: any;
  res: any;
  click = 1;
  @Output() res = new EventEmitter();

  equality(value) {
    if (value === '=') {
      this.result = this.result.concat(this.input);
      this.joined = this.result.join('');
      console.log(this.result);
      this.endResult = this.joined.match(/([-+*!/]?\d+)/g).reduce((a, v) => {
         eval((a + '' + v));
      });
      this.input.length = 0;
      this.result.length = 0;
      this.res.emit(this.endResult);
    } else if (this.click === 1) {
        this.result = this.result.concat(this.input);
    }



  }*/
  chars = ['-', '+', '*', '/'];
  reset =  false;

  compute(value) {
    debugger;
    if (this.reset && !this.chars.includes(value)) {
      this.reset = false;
    }
    let arr = this.buffer.split('');
    if (this.chars.includes(arr[arr.length -1]) && this.chars.includes(value)) {
      arr[arr.length -1] = value;
      this.buffer = arr.join('');
      return;
    }


    if (value === 'C') {
      this.buffer = '0';

    } else if (value === '=') {
      this.buffer = eval(this.buffer);
      this.buffer = this.buffer.toString();
      this.reset = true;

    } else {
      if (this.buffer === '0') {
        this.buffer = value;
      } else {

        const numbers = this.buffer.split(this.regExp);

        if (numbers[numbers.length - 1].includes('.') && value === '.') {
          return;
        }  else if (numbers.length > 1 && numbers[numbers.length - 2] === '' && numbers[numbers.length - 1] === '') {
          return;
        } else {
          this.buffer += value;
          console.log(this.buffer);
        }

      }
    }

    this.res.emit(this.buffer);
    //this.checker = '';

  }

ngOnInit() {
  }

}
