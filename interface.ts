//as Type

interface KeyPair {
    key: number;
    value: string;
}

let kv1: KeyPair = { key:1, value:"A" }; 

let kv2: KeyPair = { key:2, value:"B" }; 
console.log(kv1);
console.log(kv2);


function update(key: number, value:string):void { 
    console.log('updated KeyValue: key = '+ key + ', value = ' + value)
}

const kvp = update;
kvp(3, 'C');

interface List {
    [index:string]:string
}

let strArr : List = {};
strArr["TS"] = "TypeScript";
strArr["JS"] = "JavaScript";

console.log(strArr.TS);