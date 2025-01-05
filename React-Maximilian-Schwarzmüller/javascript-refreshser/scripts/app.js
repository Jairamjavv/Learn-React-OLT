import { apiKey } from "../scripts/utils.js";
// alias
import { apiKey2 as anotherApiKey } from "../scripts/utils.js";
// import all by grouping them as objects
import * as utils from "../scripts/utils.js";
import defaultImport from "../scripts/utils.js";

console.log(apiKey);
console.log(Object.keys(utils));
console.log(Object.values(utils));
console.log(utils.apiKey2);
console.log(anotherApiKey);
console.log(defaultImport);

// --------------------------------------------------------

import * as vvo from "../scripts/values-variables-objects.js";

console.log(vvo.welcome);
console.log(vvo.results);

vvo.justAFunction();
vvo.justAFunction2("jairam");
vvo.arrowFunction();
vvo.arrowFunction2("afternoon");
vvo.arrowFunction3("Jairam", 28);
vvo.arrowFunction3("Sairam");
console.log(vvo.returnFunction("This example is intended to be returned."));
console.log(`The square of 19: ${vvo.singleReturnFunction(19)}`);

// function as params
const printName = (name) => {
    return `This is my ${name}`;
};

const printNameOuter = (nameFunc, name) => {
    return nameFunc(name);
};

console.log(printNameOuter(printName, "jairam"));

const innerFunction = () => {
    function greet() {
        console.log("This is being called from inside innerFunction method");
    }
    greet();
};

innerFunction();
// --------------------------------------------------------
console.log(
    `The name of the student is ${vvo.student.name} and his age is ${
        vvo.student.age
    }. His rank is ${vvo.student.getRank()}`
);
// Destructuring objects
const { name, age: randomAge } = vvo.student;
console.log("destructured object values:", name, randomAge);

// Desctructuring objects as function arguments
function studentDetailPrint({ name, age }) {
    console.log(`${name} with ${age}`);
}

studentDetailPrint(vvo.student);

// spread operator with objects
const newStudent = {
    ...vvo.student,
    name: "Sairam",
};

console.log(newStudent);
// --------------------------------------------------------
// Using Class
const user1 = new vvo.User("Jairam", 22);
user1.greet();

// --------------------------------------------------------
import * as Arrays from "../scripts/arrays.js";

console.log(Arrays.hobbies);
// indexing
console.log(Arrays.hobbies[1]);
// 2D arrays
console.log(Arrays.matrix);
// 2D arrays indexing
console.log(Arrays.matrix[0]);
console.log(Arrays.matrix[1][2]);
// Utility methods
// PUSH
Arrays.hobbies.push("Cooking");
console.log(Arrays.hobbies);
// FINDINDEX - Requires arrow function with one parameter
console.log(Arrays.hobbies.findIndex((item) => item === "Cooking"));
// MAP - Transform every item in array
console.log(
    Arrays.hobbies.map((item) => {
        return { [item]: item.length };
    })
);
// Destructuring
const [firstHobby, secondHobby, thirdHobby] = Arrays.hobbies;
console.log(`The Hobbies are: ${firstHobby}, ${secondHobby}, ${thirdHobby}`);

console.log(Arrays.ramsHobbies);
console.log(Arrays.sitasHobbies);
// --------------------------------------------------------
import * as cba from "../scripts/callBackArrays.js";

cba.forEachExample();
cba.forEachExample1();

cba.mapFunctionExample1();

cba.filterFunctionExample1();

cba.someFunctionExample1();

cba.everyFunctionExample1();

cba.reduceFunctionExample1();

// --------------------------------------------------------
import * as cs from "../scripts/control-structures.js";

console.log(cs.checkAge(20));
console.log(cs.checkAge(80));

console.log(cs.loopEvens(19));
cs.loopArrays();

// --------------------------------------------------------
// setTimeout(pass a callback, and a delay)

console.log("Before timeout");
setTimeout(() => {
    console.log("This is a timeout after 5 secs");
}, 5000);

// setInterval(pass a callback, and a duration which acts as an interval)
console.log("Before interval");
const intervalId = setInterval(() => {
    console.log("I appear every 2 secs");
}, 2000);
// Clears the interval using the interval id.
setTimeout(() => clearInterval(intervalId), 6000);
