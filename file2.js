"use strict";
exports.__esModule = true;
var file1_1 = require("./file1");
var ob = new file1_1.ex();
ob.display();
var upper;
(function (upper) {
    function ToCapital(str) {
        return str.toUpperCase();
    }
    upper.ToCapital = ToCapital;
})(upper || (upper = {}));
var namespc = /** @class */ (function () {
    function namespc() {
        this.t1 = upper.ToCapital("welcome");
    }
    namespc.prototype.disp = function () {
        console.log(this.t1);
    };
    return namespc;
}());
var n = new namespc();
n.disp();
