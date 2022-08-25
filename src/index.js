"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
require("./styles.css");
var decorators_1 = require("./decorators");
var Person = /** @class */ (function () {
    function Person(n, a) {
        this.name = n;
        this.age = a ? (this.age = a) : 0;
    }
    __decorate([
        decorators_1.Required
    ], Person.prototype, "age");
    Person = __decorate([
        (0, decorators_1.Logger)("*******")
    ], Person);
    return Person;
}());
var p = new Person('Heinz');
var Product = /** @class */ (function () {
    function Product(p, t) {
        this._price = p;
        this.title = t;
    }
    Object.defineProperty(Product.prototype, "price", {
        set: function (p) {
            this._price = p;
        },
        enumerable: false,
        configurable: true
    });
    Product.prototype.getPriceWithTax = function (tax) {
        return this._price * (1 + tax);
    };
    __decorate([
        decorators_1.Log
    ], Product.prototype, "title");
    __decorate([
        decorators_1.Log2
    ], Product.prototype, "price");
    __decorate([
        decorators_1.Log2,
        __param(0, decorators_1.Log3)
    ], Product.prototype, "getPriceWithTax");
    return Product;
}());
console.log("****", new Person());
var pr = new Product(42, "test");
pr.price = 50;
var newP = pr.getPriceWithTax(0.2);
console.log("####", newP);
//# sourceMappingURL=index.js.map