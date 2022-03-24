let first: number = 12.0;       // number
 let second: number = 0x37cF;        // hexadecimal
let third: number = 0o377;         // octal
let fourth: number = 0b111001;      // binary

 console.log(first);
 console.log(second);
console.log(third);
console.log(fourth);


function add(a:number , b:number):number
{
    return a + b;
}

var sum:number = add(5,10);
console.log("Addition is : "+sum);