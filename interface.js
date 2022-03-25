//as Type
var kv1 = { key: 1, value: "A" };
var kv2 = { key: 2, value: "B" };
console.log(kv1);
console.log(kv2);
function update(key, value) {
    console.log('updated KeyValue: key = ' + key + ', value = ' + value);
}
var kvp = update;
kvp(3, 'C');
var strArr = {};
strArr["TS"] = "TypeScript";
strArr["JS"] = "JavaScript";
console.log(strArr.TS);
