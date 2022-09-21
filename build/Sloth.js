"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sloth = void 0;
var Animal_1 = require("./Animal");
var Sloth = /** @class */ (function (_super) {
    __extends(Sloth, _super);
    function Sloth(name, age, climbTree) {
        var _this = _super.call(this, name, age) || this;
        _this.climbTree = climbTree;
        return _this;
    }
    Sloth.prototype.climb = function () {
        if (this.climbTree == true) {
            console.log("".concat(this.name, " can climb tree!!!"));
        }
    };
    Sloth.prototype.walk = function () {
        console.log("".concat(this.name, " can walk!"));
    };
    Sloth.prototype.sound = function () {
        console.log("".concat(this.name, " can produce sound!"));
    };
    return Sloth;
}(Animal_1.Animal));
exports.Sloth = Sloth;
