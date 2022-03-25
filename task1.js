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
var base = /** @class */ (function () {
    function base(name) {
        this.name = name;
    }
    base.prototype.display = function () {
        console.log("Hello This is base class");
    };
    base.prototype.show = function () {
        console.log("Welcome!! " + this.name);
    };
    base.count = 0;
    return base;
}());
var child = /** @class */ (function (_super) {
    __extends(child, _super);
    function child() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Print = function () { return _super.prototype.show.call(_this); };
        return _this;
    }
    child.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("Hello This is derived class");
    };
    return child;
}(base));
var cobj = new child("abc");
cobj.display();
cobj.Print();
var bobj = new base("Pooja");
bobj.show();
