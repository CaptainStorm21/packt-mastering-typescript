interface IIdName {
  id: number;
  name: string;
}

// let idObject: IIdNameObject = {
//   id: 2
// }

// let idObject: IIdName = {
//   id: 2,
//   name: "this is a name"
// }

interface IOptional {
  id: number;
  name?: string;
}

var idObject = {
  id: 2,
  name: "this is a name"
};
var optionalId = {
  id: 1
};
var optionalIdName = {
  id: 2,
  name: "optional name"
};

//weak types
/*
When we define an interface where all of its 
properties are optional, this is considered 
to be a weak type. In other words, we have 
defined an interface, but none of the properties 
of the interface are mandatory. Let's see what 
happens if we create a weak type, and then try 
to bend the standard type rules,
*/

// interface IWeakType {
//   id?: number,
//   name?: string
// }
// let weakTypeNoOverlap: IWeakType = {
//   description: "a description"
// }

interface IIdName {
  id: number;
  name: string;
}
interface IDescrValue {
  descr: string;
  value: number;
}
function printNameOrValue(
  obj: IIdName | IDescrValue): void {
  if ('id' in obj) {
    console.log(`obj.name : ${obj.name}`);
  }
  if ('descr' in obj) {
    console.log(`obj.value : ${obj.value}`);
  }
}
