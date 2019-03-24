import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CalculatorService} from '../calculator.service';
import {buffer} from 'rxjs/operators';


@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  buffer: any;
  constructor() {
    this.buffer = '0';
  }
  @Output() btn = new EventEmitter();

  pushBtn(value) {
    this.buffer = value;
    this.btn.emit(this.buffer);
  }




  ngOnInit() {
  }

}
