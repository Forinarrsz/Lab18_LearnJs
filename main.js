console.log("Hello, Java Script!");

let age = 20;
let name = "Alina";
let isStudent = true;

console.log("name: ", name);
console.log("age: ", age);
console.log("is student: ", isStudent);

let value = 10;
console.log(value);
value = "this is string";
console.log(value);
value = true;
console.log(value);

let username = "Jake";
console.log(`Hi, ${username}`);
let price = 12.34;
let temperature = -12;
let infinity = 1/0;
let notANumber = 0/0;
console.log(0.1 + 0.2);

let bignumber = 76587898077856n;
let huge = BigInt("5676788978665656870988");

let isAlive = true;
let isWorking = false;
let isAdult = age => 18;

let x;
let y = undefined;

let userData = null;
let id = Symbol("id");

let person = {
    name: "jake",
    age: 38,
    isStudent: false,
    sayHello: function() {
        console.log("Hi!");
    },
};
console.log(person.name);

let fruits = ["apple", "banana", "orange"];
let numbers = [1,2,3,4,5];
let mixed = ["txt", 42, true, null];

function sum(a,b) {
    return a + b;
}

let multipy = function (x,y) {
    return x*y;
};
console.log(sum(5,3));

let now = new Date();
let birthday = new Date("2126-08-24");

let a = 10;
let b = 3;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);

console.log(10 + "5");
console.log("10" - 5);


const numArray = [1,2,3];
numArray[0] = 10;
console.log(numArray);
numArray = [5,6,7];

const persons = {name: "Alina", age: 19};

persons.age = 50;
persons.city = "Moscow";
console.log(persons);
person = {name: "vasya"};

