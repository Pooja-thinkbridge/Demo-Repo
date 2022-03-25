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
var shape = /** @class */ (function () {
    function shape() {
        this.side = 10;
        this.x = "BaseClass";
    }
    shape.pi = 3.14;
    return shape;
}());
var circle = /** @class */ (function () {
    function circle() {
        this.area = function (r) {
            return console.log("Circle Area : " + shape.pi * r * r);
        };
    }
    return circle;
}());
var square = /** @class */ (function (_super) {
    __extends(square, _super);
    function square() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.area = function () {
            return console.log("Sqare area : " + _this.side * _this.side);
        };
        return _this;
    }
    return square;
}(shape));
var c = new circle();
c.area(5);
var s = new square();
s.area();
