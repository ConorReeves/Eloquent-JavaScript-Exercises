'use strict'

const reverseArray = (arr) => {
    let n = [];
    let l = arr.length;

    for (let i = 0; i < l; i++) {
        n.push(arr.pop());
    }
    return n;
}

const arrayToList = (arr) => {
    let list = null;
    const rArr = reverseArray(arr);

    for (let el in rArr) {
        list = {
            value: rArr[el],
            rest: list
        }
    }
    return list;
}

const listToArray = (list) => {
    let arr = [];

    for (let l = list; l; l = l.rest) {
        if (l.rest == null) {
            arr.push(l.value);
            break
        } else {
            arr.push(l.value);
            continue
        }
    }
    return arr;
}

const prepend = (el, list) => {
    list = {
        value: el,
        rest: list
    }
    return list;
}

/*
const nth = (list, index) => {
    for (l = list, c = 0; l; l = l.rest, c++) {
        if (c == index) {
            return l.value;
        }
    }
}
*/

const nth = (list, index) => {
    if (list == null) {
        return undefined;
    } else
    if (index == 0) {
        return list.value;
    } else {
        return nth(list.rest, index - 1)
    }
    
}

console.log(arrayToList([10, 20]));

console.log(listToArray(arrayToList([10, 20, 30,])));

console.log(prepend(10, prepend(20, null)));

console.log(nth(arrayToList([10, 20, 30]), 1));

