import * as tslib_1 from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
var CalculatorComponent = /** @class */ (function () {
    function CalculatorComponent() {
        this.regExp = new RegExp('/([-+*/]?\\d+)/', 'g');
        this.res = new EventEmitter();
        this.buffer = '';
    }
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
    CalculatorComponent.prototype.compute = function (value) {
        this.checker = this.buffer + value;
        if (value === 'C') {
            this.buffer = '0';
        }
        else if (value === '=') {
            this.buffer = eval(this.buffer);
        }
        else {
            if (this.buffer === '0') {
                this.buffer = value;
            }
            else {
                var numbers = this.buffer.split(this.regExp);
                if (numbers[numbers.length - 1].includes('.') && value === '.') {
                    return;
                }
                else if (this.checker.includes('++') || this.checker.includes('--')
                    || this.checker.includes('//') || this.checker.includes('**')) {
                    return;
                }
                else if (numbers.length > 1 && numbers[numbers.length - 2] === '' && numbers[numbers.length - 1] === '') {
                    return;
                }
                else {
                    this.buffer += value;
                }
            }
        }
        this.res.emit(this.buffer);
    };
    CalculatorComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], CalculatorComponent.prototype, "res", void 0);
    CalculatorComponent = tslib_1.__decorate([
        Component({
            selector: 'app-calculator',
            templateUrl: './calculator.component.html',
            styleUrls: ['./calculator.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], CalculatorComponent);
    return CalculatorComponent;
}());
export { CalculatorComponent };
//# sourceMappingURL=calculator.component.js.map