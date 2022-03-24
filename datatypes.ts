let no: number = 123456;
let no2 : number = 123.85569;

console.log(no.toExponential(2));
console.log(no2.toFixed(3));
console.log(no2.toLocaleString());
console.log(no2.toPrecision(3));
console.log(no2.toString());
let n = new Number(123);
console.log(typeof n)
let num2 = no.valueOf() 
console.log(num2) //Output: 123
console.log(typeof num2)

let str1: string = 'Hello';
let str2: string = 'TypeScript';
console.log(str1.concat(str2));
console.log(str2.indexOf('c'));