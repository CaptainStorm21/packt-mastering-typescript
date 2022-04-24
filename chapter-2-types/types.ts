//any type
// var item1 = { id: 1, name: "item 1" };
// item1 = { id: 2 };

//explicit casting
// var item1 = <any>{ id: 1, name: "item 1" };
// item1 = { id: 2 };

//let keyword
var index: number = 0;
if (index == 0) {
  var index: number = 2;
  console.log(`index = ${index}`);
}
console.log(`index = ${index}`);

var myBoolean: boolean = true;
var myNumber: number = 1234;
var myStringArray: string[] = [`first`, `second`, `third`];

console.log(myBoolean);
console.log(myNumber);
console.log(myStringArray);

var nameIdObject = { name: "myName", id: 1, print() { } };
console.log(nameIdObject)
nameIdObject = { id: 2, name: "anotherName", print() { } };
console.log(nameIdObject);
// nameIdObject = { id: 3, name: "thirdName" };
// console.log(nameIdObject);

function calculate(a: number, b: number, c: number): number {
  return (a * b) + c;
}
console.log(`calculate() = ${calculate(3, 2, 1)}`);

