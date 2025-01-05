let inString = "Behold, a boldly constructed test string.";

// Step 1 - countBs(param 1: string)
const countBs = (myStr) => {
    let bCount = 0;
    for (let c = 0; c < (myStr.length); c++) {
        if (myStr[c].toUpperCase() == 'B') {
        bCount++;
        }
        /*console.log(`iteration `, c, `\treading letter`, myStr[c], `\t bcount `, bCount)*/
    }
    return bCount;
}

console.log(countBs(inString))

// Step 2 - countChar(param 1: string, param 2: char )
const countChar = (inStr, inChar = 'a') => {
    let charCount = 0;
    for (let i = 0; i < inStr.length; i++) {
        if (inStr[i].toUpperCase() == inChar.toUpperCase()) {
            charCount++;
        }
    }
    return charCount;
}

console.log(countChar(inString, 't'))


/*
--- Attempt 2 ---

//console.log(inString[2].toUpperCase() == "B");
/*
function countBs(input) {
    let charCount = 0;
    for (let c = 0; c < (input.length-1); c++) {
        console.log(input[1].toUpperCase())
        if (input[c].toUpperCase() == "B") {
            charCount++;
            console.log(charCount)
        }
    }
}
*/
/*
--- Attempt 1 ---

var string = "Bob";
let charCount = 0;
let char = "b";

console.log(typeof string[0])

const CountBs = (input) => {
    const getIndex = () => {
        let length = input.length;
        console.log("Length is", length)
        for (let c = 0; c < string.length, c++;) {
            if (string.toUpperCase(input[c]) === string.toUpperCase(char)) {
                charCount++;
            } else {
                return "FALSE";
            }
        }
        return charCount;
    }
    return getIndex()
}

console.log(CountBs(string))
*/