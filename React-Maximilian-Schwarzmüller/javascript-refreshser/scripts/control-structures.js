export function checkAge(age) {
    if (age < 18) {
        return "Not Allowed";
    } else if (age >= 18 && age < 40) {
        return "Allowed";
    } else {
        return "Allowed in morning only";
    }
}

export const loopEvens = (n) => {
    const evenNumbersList = [];
    for (let i = 0; i < n; i++) {
        evenNumbersList.push(i);
    }
    return evenNumbersList;
};

export const loopArrays = () => {
    const colors = ["orange", "limegreen", "red"];
    for (const e of colors) {
        console.log(e);
    }
};
