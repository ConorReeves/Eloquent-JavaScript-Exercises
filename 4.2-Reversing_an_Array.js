const reverseArray = (arr) => {
    let rev = [];
    let origLength = arr.length;

    for (let i = 0; i < origLength; i++) {
        rev.push(arr.pop());
    }
    return rev;
}


const reverseArrayInPlace = (arr) => {
    let o = 0;
    for (let i = 0; i < (Math.floor(arr.length / 2)); i++) {
        o = arr[i];

        arr[i] = arr[arr.length - 1 - i]; 
        arr[arr.length - 1 - i] = o;
    }
    return arr;
}

const myArray = ["A", "B", "C"];
console.log(reverseArray(myArray))

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue)
console.log(arrayValue)
