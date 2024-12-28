// Variables
export const welcome = "Welcome to the JavaScript refresher";

console.log(welcome);

let a = 10;
let b = 20;
let results = `a:${a}, b:${b}, ${a}+${b}=${a + b}`;
export { results };

// Objects
export const student = {
    name: "Jairam",
    age: 25,
    marks: 81,
    getRank() {
        if (this.marks > 90 && this.marks <= 100) {
            return "A";
        } else if (this.marks > 80 && this.marks <= 90) {
            return "B";
        } else if (this.marks > 70 && this.marks <= 80) {
            return "C";
        } else if (this.marks > 60 && this.marks <= 70) {
            return "D";
        } else if (this.marks >= 50 && this.marks <= 60) {
            return "E";
        } else if (this.marks < 50) {
            return "F";
        }
    },
};

//  Functions
export function justAFunction() {
    console.log("just a function");
}

export const arrowFunction = () => {
    console.log("arrow function");
};

// functions with parameters
export function justAFunction2(name) {
    console.log(`Hello ${name}`);
}

export const arrowFunction2 = (greetTime) => {
    // if greetTime="morning" then return "Good morning"
    console.log(`Good ${greetTime}`);
};

export const arrowFunction3 = (name, age = 34) => {
    console.log(`My name is ${name}. My age is ${age}`);
};

export const returnFunction = (justForReturnPurpose) => {
    return justForReturnPurpose;
};

export const singleReturnFunction = (number) => number * 2;

// Class
export class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hello", this.name);
    }
}
