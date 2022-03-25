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
var empObj1 = {
    empCode: 1,
    compId: 101,
    empName: "Pooja"
};
var empObj2 = {
    empCode: 2,
    compId: 102,
    empName: "reha"
};
empObj2.empName = "Rushi";
//empObj2.compId = 101;
console.log(empObj1);
console.log(empObj2);
var empObj = {
    empCode: 1,
    name: "Bill",
    gender: "Male"
};
console.log(empObj);
