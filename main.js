// variables in Js
// var, let, const
//  var is a global scope
// let can be reassigned, const can't be

// let score;
// score = 10;
// console.log(score);

// Datatype:
// primitive: directly assigned to memory
// String, Number, Boolean, null, undefined, Symbol;

// const name = 'Clement';
// const age = 28;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;

// console.log(typeof name);

// concantenation
// console.log('My name is ' + name + ' and I am ' + age + ' years');

// Template String
// console.log(`My name is ${name} and I am ${age} Years`);
// const hello = `My name is ${name} and I am ${age} Years`;
// console.log(hello);

// const s = 'Hello World';
// console.log(s.length);
// console.log(s.toLowerCase());
// console.log(s.toUpperCase());
// console.log(s.substring(0, 6).toUpperCase());

// const s = 'Technology, Computer Science, ICT';
// console.log(s.split(', '));
// Arrays:- variables that holds mulitple values

// Methods and Arrays

// const fruits = ['Apples', 'Mango', 'Banana'];
// fruits[3] = 'Tomato';
// fruits.push('Pineapple');
// fruits.unshift('WaterMelon');
// fruits.pop();
// console.log(Array.isArray(fruits));
// console.log(fruits);

// const person = {
//   firstName: 'Clement',
//   lastName: 'Nnamdi',
//   age: 30,
//   hobbies: ['Reading', 'Internet Surfing', 'Sports'],
//   address: {
//     street: 'Agbole Kabiyesi Adetomiwa Adeyemoo',
//     city: 'Ibadan',
//     state: 'Oyo',
//   },
// }
// person.email= 'blessedmarcel1@gmail.com'
// console.log(person);

// //to get a particular value from arrays
// console.log(person.hobbies[1]);
// console.log(person.address.city);

const todos = [
  {
    id: 1,
    text: 'Invite her over',
    isCompleted: true,
  },
  {
    id: 2,
    text: 'Meetin with Boss',
    isCompleted: true,
  },
  {
    id: 3,
    text: 'Need to call Deji',
    isCompleted: false,
  },
];
// console.log(todos[1].text);

//converting to Json so we can connect it to a server

// const todoJson = JSON.stringify(todos);
// console.log(todoJson);

//FOR LOOP
// for(assignment; condition; increment)

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// while Loop: set variables outside of the loop

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// LOOPING INTO ARRAYS
for (let todo of todos) {
  console.log(todos.text);
}
