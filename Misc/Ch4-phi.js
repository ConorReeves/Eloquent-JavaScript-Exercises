const phi = (table) => {
    return (table[3] * table[0] - table[2] * table [1])
    /
    Math.sqrt((table[2] + table[3])
    *         (table[0] + table[1])
    *         (table[1] + table[3])
    *         (table[0] + table[2])
    )
}

/*
table[0] = 00 - sqrl=0 pizza=0
table[1] = 01 - sqrl=0 pizza=1 
table[2] = 10 - sqrl=1 pizza=0
table[3] = 11 - sqrl=1 pizza=1
*/

console.log(phi([76, 9, 4, 1]))