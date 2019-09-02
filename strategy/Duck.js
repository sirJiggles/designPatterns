"use strict";
exports.__esModule = true;
// abstract super class 'behold the duck'
var Duck = /** @class */ (function () {
    function Duck() {
    }
    Duck.prototype.display = function () {
        // default
    };
    Duck.prototype.performFly = function () {
        this.flyBehavior.fly();
    };
    Duck.prototype.performQuack = function () {
        this.quackBehavior.quack();
    };
    return Duck;
}());
exports["default"] = Duck;
