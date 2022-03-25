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
var Employee = /** @class */ (function () {
    function Employee(code, name) {
        this.empName = name;
        this.empCode = code;
    }
    Employee.prototype.get = function () {
        console.log("Emp Code : " + this.empCode);
        console.log("Name : " + this.empName);
    };
    return Employee;
}());
var b1 = new Employee(101, "Raj");
b1.get();
//abstract
var Person = /** @class */ (function () {
    function Person(name) {
        this.name1 = name;
    }
    return Person;
}());
var emp1 = /** @class */ (function (_super) {
    __extends(emp1, _super);
    function emp1(id, name) {
        var _this = _super.call(this, name) || this;
        _this.id = id;
        return _this;
    }
    emp1.prototype.display = function () {
        return new emp1(101, "Pooja");
    };
    emp1.prototype.get = function () {
        console.log(this.id);
        console.log(this.name1);
    };
    return emp1;
}(Person));
var e = new emp1(102, "Diya");
e.get();
