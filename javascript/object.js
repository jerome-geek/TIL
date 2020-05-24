'use strict';
// Objects
// one of the JavaScirpt's data types.
// a collection of reltaed data and / or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value }

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj = new Object(); // 'object constructor' syntax
function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const jerome = { name: 'jerome', age: 4 };
print(jerome);

// with JavaScript magic (dynamically typed language)
// can add properties later
jerome.hasJob = true;
console.log(jerome.hasJob);

// can delete properties later
delete jerome.hasJob;
console.log(jerome.hasJob);

// 2. Computed properties
// key should be always string
console.log(jerome.name);
console.log(jerome['name']);
jerome['hasJob'] = true;
console.log(jerome.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(jerome, 'name');
printValue(jerome, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('jerome', 30);
console.log(person4);

// 4. Constructor Function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in jerome);
console.log('age' in jerome);
console.log('random' in jerome);
console.log(jerome.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (let k in jerome) {
  console.log(k);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (let v of array) {
  console.log(v);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'jerome', age: 20 };
const user2 = user;
console.log(user);

// old way
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
