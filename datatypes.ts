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
let x : boolean = true;
console.log(x);


let arr1:number[];
arr1 = [1,2,3,4];
 console.log("Array[0]: " +arr1[0]);
console.log("Array[1]: " +arr1[1]);

var mArray:number[][] = [[1,2,3],[4,5,6]];

console.log(mArray[0][0]);
 console.log(mArray[0][1]);
 console.log(mArray[0][2]);
  console.log();
 console.log(mArray[1][0]);
 console.log(mArray[1][1]);
console.log(mArray[1][2]);


// Passing Arrays to Functions

 let arry:string[] = new Array("Jatin","2022","Angular","typescript");


function display(arr_values:string[]){
 for (var i = 0; i<arr_values.length; i++) {
     console.log(arr_values[i]);
} }
display(arry);


// Spread Operator : is used to initialize arrays and objects from another array 

 let arry1 = [1,2,3];
let arry2 = [4,5,6];



 let copyArray = [...arry1];
console.log("CopiedArray:" +copyArray);

// // create new array from existing array with more elements
 let newArray = [...arry1, 7, 8];
 console.log("NewArray:" +newArray);

// // create array by merging two arrays

let mergedArray = [...arr1, ...arry2];
console.log("MergedArray:" +mergedArray);


// // Declare a tuple

 let t: [string, number];

// // Initialize It

t = ["hi", 8];
t.push("bye" , 10);
console.log("Tupple : "+ t);
console.log(t[0]);

enum PrintMedia {
    Newspaper = 1,
    Newsletter,
    Magazine,
    Book
  }
  console.log(PrintMedia)

  //union

  function displayType(code: (string | number))
{
    if(typeof(code) === "number")
        console.log('Code is number. '+code)
    else if(typeof(code) === "string")
        console.log('Code is string. '+code)
}
 
displayType(333);
displayType("HIII");
