import {Component, EventEmitter, OnInit} from '@angular/core';
import {CalculatorService} from '../calculator.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  result: any;
  constructor() {
    this.result = 0;
  }

  showResult(value) {
    this.result = value;
  }

  ngOnInit() {

  }

}
