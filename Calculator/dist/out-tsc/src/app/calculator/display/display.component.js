import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var DisplayComponent = /** @class */ (function () {
    function DisplayComponent() {
        this.result = 0;
    }
    DisplayComponent.prototype.showResult = function (value) {
        this.result = value;
    };
    DisplayComponent.prototype.ngOnInit = function () {
    };
    DisplayComponent = tslib_1.__decorate([
        Component({
            selector: 'app-display',
            templateUrl: './display.component.html',
            styleUrls: ['./display.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], DisplayComponent);
    return DisplayComponent;
}());
export { DisplayComponent };
//# sourceMappingURL=display.component.js.map