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

console.log(typeof "txt");
console.log(typeof 42);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof[]);
console.log(typeof function () {});

let numberX = null;
console.log(numberX === null);

//practice
let newPrice;
newPrice = 100;
console.log("Значение:", newPrice);
console.log("Тип:", typeof newPrice);
newPrice = "100 рублей";
console.log("Значение:", newPrice);
console.log("Тип:", typeof newPrice);


let num = 42;
let str = String(num);
let str2 = num.toString();
let str3 = "" + num;

let strNum = "123";
let int = Number(strNum);
let int2 = parseInt("42.5");
let float = parseFloat("3.14");
let int3 = +"99";

let bool1 = Boolean(1);
let bool2 = !!1;
let bool3 = Boolean(0);
let bool4 = Boolean("");

console.log("5" + 3);
console.log("5" - 3);
console.log("5" * "2");
console.log(true + 1);
console.log(false + 1);
console.log(null + 1);
console.log(undefined + 1);

console.log(5 == "5"); // true (нестрогое, с преобразованием)
console.log(5 === "5"); // false (строгое, без преобразования)
console.log(0 == false); // true
console.log(0 === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

let obj1 = { name: "John" };
let obj2 = { name: "John" };

console.log(obj1 == obj2); // false
console.log(obj1 === obj2); // false

let obj3 = obj1; // obj3 ссылается на тот же объект
console.log(obj1 === obj3); // true

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
console.log(arr1 === arr2); // false (разные массивы)
//practice
let x1 = 10;
let y1 = 2;
console.log(x1 + y1);
console.log(x1 - y1);
console.log(x1 * y1);
console.log(x1 / y1);
x1 = "10";
console.log(x1 + y1);
console.log(x1 - y1);
console.log(x1 * y1);
console.log(x1 / y1);
