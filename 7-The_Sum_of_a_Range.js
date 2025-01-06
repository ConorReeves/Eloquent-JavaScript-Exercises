const range = (start, end, step) => {
    let arr = [];
    for (let i = start; i <= end; i += step) {
        arr.push(i);
    }
    return arr;
}

const sum = (...numbers) => {
    let total = 0;
    for (let x of numbers[0]) {
        total += x;
    }
    return total;
}



console.log("The sum is", sum(range(1,10,1)))
