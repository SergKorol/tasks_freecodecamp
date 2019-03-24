import * as tslib_1 from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent() {
        this.btn = new EventEmitter();
        this.buffer = 0;
    }
    ButtonsComponent.prototype.pushBtn = function (value) {
        this.buffer = value;
        this.btn.emit(this.buffer);
    };
    ButtonsComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], ButtonsComponent.prototype, "btn", void 0);
    ButtonsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-buttons',
            templateUrl: './buttons.component.html',
            styleUrls: ['./buttons.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ButtonsComponent);
    return ButtonsComponent;
}());
export { ButtonsComponent };
//# sourceMappingURL=buttons.component.js.map