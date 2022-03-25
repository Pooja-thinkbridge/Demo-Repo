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
var EmpArrr = /** @class */ (function () {
    function EmpArrr() {
        this.emparr = [
            {
                id: 1,
                name: "pooja",
                isActive: true,
                designation: "manager",
                project: [
                    {
                        id: 101,
                        name: "angular"
                    },
                    {
                        id: 102,
                        name: "delta"
                    }
                ]
            },
            {
                id: 2,
                name: "Shreyas",
                isActive: true,
                designation: "developer",
                project: [
                    {
                        id: 303,
                        name: "hp"
                    }
                ]
            },
            {
                id: 3,
                name: "Shubham",
                isActive: true,
                designation: "QA",
                project: [
                    {
                        id: 201,
                        name: "TSG"
                    },
                    {
                        id: 202,
                        name: "DBA"
                    }
                ]
            },
        ];
    }
    return EmpArrr;
}());
var Disp = /** @class */ (function (_super) {
    __extends(Disp, _super);
    function Disp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Disp.prototype.display = function () {
        console.log("***************************************************");
        this.emparr.forEach(function (_element) {
            console.log();
            console.log("Data for employee : " + _element.id);
            console.log("Name : " + _element.name);
            console.log("Designation : " + _element.designation);
            console.log("Active Status : " + _element.isActive);
            console.log("----------------------Projects----------------------");
            _element.project.forEach(function (pro) {
                console.log("Project ID : " + pro.id);
                console.log("Project Name : " + pro.name);
            });
            console.log("***************************************************");
        });
    };
    return Disp;
}(EmpArrr));
var d = new Disp();
d.display();
