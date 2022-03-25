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
