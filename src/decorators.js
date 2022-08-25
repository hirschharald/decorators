"use strict";
/*
  decorators

*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseHtmlTemplate = exports.Log = exports.Log3 = exports.Log2 = exports.Logger = exports.NotEmpty = exports.Required = void 0;
var registeredValidators = {};
function Required(target, propName) {
    var _a;
    registeredValidators[target.constructor.name] = __assign(__assign({}, registeredValidators[target.constructor.name]), (_a = {}, _a[propName] = ['required'], _a));
}
exports.Required = Required;
function NotEmpty(target, propName) {
    var _a;
    registeredValidators[target.constructor.name] = __assign(__assign({}, registeredValidators[target.constructor.name]), (_a = {}, _a[propName] = ['notempty'], _a));
}
exports.NotEmpty = NotEmpty;
function Logger(logString) {
    return function (constructor) {
        console.log(logString, constructor);
    };
}
exports.Logger = Logger;
function Log2(target, propertyname, descr) {
    console.log("tar", target);
    console.log("name", propertyname);
    console.log("decr", descr);
}
exports.Log2 = Log2;
function Log3(target, name, position) {
    console.log("targetr", target);
    console.log("name", name);
    console.log("position", position);
}
exports.Log3 = Log3;
function Log(target, propertyname) {
    console.log("###", target, propertyname);
}
exports.Log = Log;
function UseHtmlTemplate(templ, divId) {
    return function (constructor) {
        var el = document.getElementById(divId);
        el ? (el.innerHTML = templ) : "";
    };
}
exports.UseHtmlTemplate = UseHtmlTemplate;
//# sourceMappingURL=decorators.js.map