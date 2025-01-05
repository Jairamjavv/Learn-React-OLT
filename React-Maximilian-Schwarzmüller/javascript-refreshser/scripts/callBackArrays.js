/**
 * forEach
 * Find
 * Map
 * Some
 * Every
 * Filter
 * Reduce
 */

/**
 * forEach:
 * Accepts a callback function.
 * Calls the callback function for every element in the array passed.
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export function forEachExample() {
    function printNumbers(element) {
        console.log(element * 10);
    }
    // each number from the numbers array is passed into the function
    numbers.forEach(printNumbers);

    numbers.forEach((el) => {
        if (el % 2 === 0) {
            console.log(Math.pow(el, 2));
        }
    });
}

const movies = [
    {
        title: "Amaran",
        score: 85,
    },
    {
        title: "G.O.A.T",
        score: 65,
    },
    {
        title: "Maharaja",
        score: 80,
    },
];
export function forEachExample1() {
    movies.forEach((el) => console.log(`${el.title} - ${el.score}/100`));
}

/**
 * Map:
 * Creates a new array.
 * The new array is formed by the results of the callback function provided inside the .map().
 * Every element in the array is considered.
 */

const texts = ["india", "australia", "japan"];
export function mapFunctionExample1() {
    console.log(texts.map((el) => el.toUpperCase()));
    console.log(
        `Movies I watched recently are: ${movies.map((el) =>
            el.title.toLocaleUpperCase()
        )}`
    );
}

/**
 * Filter:
 * Creates a new subarray array.
 * The new subarray is formed by the results of the callback function provided inside the .filter().
 * The callback function should return boolean values.
 * Every element in the array is considered and only true values are filtered out as new subarray.
 */

export function filterFunctionExample1() {
    console.log(
        texts.filter((el) => {
            if (el.length === 5) {
                return el;
            }
        })
    );
    console.log(
        movies.filter((el) => {
            if (el.score >= 80) {
                return el;
            }
        })
    );
    // combining maps and filter
    console.log(
        movies
            .filter((el) => {
                if (el.score >= 80) {
                    return el;
                }
            })
            .map((el) => el.title)
    );
}

/**
 * Some:
 * Returns a boolean value.
 * The callback function should be conditioanl logic and return boolean values.
 * Every element in the array is considered.
 * If any one of the value satisfies the conditional logic inside callback function than return true else false
 */

export function someFunctionExample1() {
    console.log(
        texts.some((i) => {
            return i.length > 5;
        })
    );
}

/**
 * Some:
 * Returns a boolean value.
 * The callback function should be conditioanl logic and return boolean values.
 * Every element in the array is considered.
 * If all of the value satisfies the conditional logic inside callback function than return true else false.
 */

export function everyFunctionExample1() {
    console.log(
        texts.every((i) => {
            return i.length === 5;
        })
    );
}

/**
 * Reduce:
 * Accepts a callback function called a "reducer function".
 * Each and every element is passed to it.
 * Returns a reduced single value.
 */

export function reduceFunctionExample1() {
    // sum = sum + num
    console.log(numbers.reduce((sum, num) => sum + num));
    // product = product * num
    console.log(numbers.reduce((product, num) => product * num));

    console.log(
        movies.reduce((bestMovie, currMovie) => {
            if (currMovie.score > bestMovie.score) {
                return currMovie;
            }
            return bestMovie;
        })
    );

    // initial value for accumulator/sum
    // sum = sum + num
    console.log(numbers.reduce((sum, num) => sum + num, 500));
}
