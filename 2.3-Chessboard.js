let h = 60;
let w = 60;
let str = "";

for (let i = 0; i < h; i++) {
    for (let n = 0; n < w; n++) {
        if ((i % 2) === 0) {
            str += " #";
        } else {
            str += "# ";
        }
    }
    str += "\n";
}

console.log(str)


/*
-- Attempt 1 --

let height = 8;
let width = 4;
let base = "";

for (let i = 0; i < height; i++) {
    for (let c = 0; c < width; c++){
            
    }
    if ((i % 2) === 0) {
        for (let c = 0; c < width; c++){

        }
        base += " # # # #\n"
    } else {
        base += "# # # # \n"
    }
}

console.log(base)

-- Attempt 2 --

let a = 8;
let b = 4;
let str = ``;

for (let i = 0; i < a; i++) {
    for (let c = 0; c < b; c++) {
        if (((c+i) % 2)===0) {
            if (c >= b) {
                str += "# ";
            } else {
                continue
            }
        }
    }

    console.log(str)
}
*/