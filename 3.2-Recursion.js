/*
const isEven = (i) => {
    const modulo = () => {
        return i % 2;
    }
    if (modulo(i) == 0) {
        return true;
    } else 
    if (modulo(i) == 1) {
        return false
    } else
    if (modulo(i) != 0 && (modulo(i) != 2)) {
        isEven(i)
    }
}
*/

/* practise ternary operator */
const isEven = (i) => {
    const modulo = () => {
        return i % 2;
    }
    return (modulo(i) === 0) ? true : (modulo(i) === 1) ? false : isEven(i)
}


console.log(isEven(50));
/* → true */
console.log(isEven(75));
/* → false */
console.log(isEven(-1));
/* → Stack overflow - Uncaught RangeError: Maximum call stack size exeeded - Infinite yield */