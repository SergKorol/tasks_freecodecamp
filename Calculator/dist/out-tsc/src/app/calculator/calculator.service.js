import * as tslib_1 from "tslib";
import { EventEmitter, Injectable } from '@angular/core';
var CalculatorService = /** @class */ (function () {
    function CalculatorService() {
        this.buffer = '';
        this.result = '';
        this.onPress = new EventEmitter();
    }
    CalculatorService.prototype.onNumber = function (num) {
        if (this.command) {
            this.buffer = this.buffer + num;
        }
        else {
            this.result = this.result + num;
        }
    };
    CalculatorService.prototype.onOperator = function (operator) {
        this.command = operator;
    };
    CalculatorService.prototype.onCompute = function () {
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
    };
    CalculatorService.prototype.onClear = function () {
        this.buffer = ' ';
        this.result = ' ';
    };
    CalculatorService.prototype.add = function (n1, n2) {
        this.result = n1;
        this.buffer = n2;
        return n1 + n2;
    };
    CalculatorService.prototype.substruct = function (n1, n2) {
        this.result = n1;
        this.buffer = n2;
        return n1 - n2;
    };
    CalculatorService.prototype.multiply = function (n1, n2) {
        this.result = n1;
        this.buffer = n2;
        return n1 * n2;
    };
    CalculatorService.prototype.divide = function (n1, n2) {
        this.result = n1;
        this.buffer = n2;
        return n1 / n2;
    };
    CalculatorService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        })
    ], CalculatorService);
    return CalculatorService;
}());
export { CalculatorService };
//# sourceMappingURL=calculator.service.js.map