var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var no = 123456;
var no2 = 123.85569;
console.log(no.toExponential(2));
console.log(no2.toFixed(3));
console.log(no2.toLocaleString());
console.log(no2.toPrecision(3));
console.log(no2.toString());
var n = new Number(123);
console.log(typeof n);
var num2 = no.valueOf();
console.log(num2); //Output: 123
console.log(typeof num2);
var str1 = 'Hello';
var str2 = 'TypeScript';
console.log(str1.concat(str2));
console.log(str2.indexOf('c'));
var x = true;
console.log(x);
var arr1;
arr1 = [1, 2, 3, 4];
console.log("Array[0]: " + arr1[0]);
console.log("Array[1]: " + arr1[1]);
var mArray = [[1, 2, 3], [4, 5, 6]];
console.log(mArray[0][0]);
console.log(mArray[0][1]);
console.log(mArray[0][2]);
console.log();
console.log(mArray[1][0]);
console.log(mArray[1][1]);
console.log(mArray[1][2]);
// Passing Arrays to Functions
var arry = new Array("Jatin", "2022", "Angular", "typescript");
function display(arr_values) {
    for (var i = 0; i < arr_values.length; i++) {
        console.log(arr_values[i]);
    }
}
display(arry);
// Spread Operator : is used to initialize arrays and objects from another array 
var arry1 = [1, 2, 3];
var arry2 = [4, 5, 6];
var copyArray = __spreadArray([], arry1, true);
console.log("CopiedArray:" + copyArray);
// // create new array from existing array with more elements
var newArray = __spreadArray(__spreadArray([], arry1, true), [7, 8], false);
console.log("NewArray:" + newArray);
// // create array by merging two arrays
var mergedArray = __spreadArray(__spreadArray([], arr1, true), arry2, true);
console.log("MergedArray:" + mergedArray);
// // Declare a tuple
var t;
// // Initialize It
t = ["hi", 8];
t.push("bye", 10);
console.log("Tupple : " + t);
console.log(t[0]);
var PrintMedia;
(function (PrintMedia) {
    PrintMedia[PrintMedia["Newspaper"] = 1] = "Newspaper";
    PrintMedia[PrintMedia["Newsletter"] = 2] = "Newsletter";
    PrintMedia[PrintMedia["Magazine"] = 3] = "Magazine";
    PrintMedia[PrintMedia["Book"] = 4] = "Book";
})(PrintMedia || (PrintMedia = {}));
console.log(PrintMedia);
//union
function displayType(code) {
    if (typeof (code) === "number")
        console.log('Code is number. ' + code);
    else if (typeof (code) === "string")
        console.log('Code is string. ' + code);
}
displayType(333);
displayType("HIII");
//any
var something = "Hello World!";
something = 23;
something = true;
console.log(something);
