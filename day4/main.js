const getData = require("../../script.js");

let data = getData("\n\n");

let reg = /\n/ig;

// for (let x = 0; x< data.length; x++) {
//     data[x] = data[x].replace(reg, " ").split(" ")
//     let newEntry = {};
//     for (let y = 0; y < data[x].length;y++){
//         let line = data[x][y].split(":");
//         newEntry[line[0]] = line[1]
//     }
//     newEntry['keys'] = Object.keys(newEntry);
//     data[x] = newEntry;
// }

// data = data.map( function(x) { return parseInt(x)
// })

data = data.map((x) => {
    return  x.split("\n")
})
directions = data.shift()
// console.log(data[0][0])
directions = directions[0].split(",")
// console.log(data[6])
for (let x = 0; x< data.length; x++) {
    for (let y = 0; y< data[x].length; y++) {
        data[x][y] = data[x][y].replace("  ", " ").split(" ")
    }
}

for (let x = 0; x< data.length; x++) {
    for (let y = 0; y< data[x].length; y++) {
        if(data[x][y].length > 5) {
            // console.log("traitor")
            data[x][y].splice(data[x][y].indexOf(""), 1)
        }
    }
}


let tester = [
    [ 75, 65, 96, 19, "87" ],
    [ 12, 51, '97', '68', '8' ],
    [ 42, 90, 61, 10, 71 ],
    [ 69, '48',  '7', 15, '26' ],
    [ "43", '89', '21', '16', "35" ]
  ]

function verify(board) {
    for (let x = 0; x < board.length; x++) {
        if (typeof(board[x][0]) == typeof(1234) && typeof(board[x][1]) == typeof(1234) && typeof(board[x][2]) == typeof(1234) && typeof(board[x][3]) == typeof(1234) && typeof(board[x][4]) == typeof(1234) ){
            return true
        } else if (typeof(board[0][x]) == typeof(1234) && typeof(board[1][x]) == typeof(1234) && typeof(board[2][x]) == typeof(1234) && typeof(board[3][x]) == typeof(1234) && typeof(board[4][x]) == typeof(1234)){
            return true
        }
    }
    
    if (typeof(board[0][0]) == typeof(1234) && typeof(board[1][1]) == typeof(1234) && typeof(board[2][2]) == typeof(1234) && typeof(board[3][3]) == typeof(1234) && typeof(board[4][4]) == typeof(1234)) {
        return true
    }
    if (typeof(board[4][0]) == typeof(1234) && typeof(board[3][1]) == typeof(1234) && typeof(board[2][2]) == typeof(1234) && typeof(board[1][3]) == typeof(1234) && typeof(board[0][4]) == typeof(1234)) {
        return true
    }
    return false
}

let final = [true, 0]
let counter = 0
let currentNum = directions[0]
while (final[0]) {

    currentNum = directions[counter]
    // console.log(currentNum)
    for (let x = 0; x< data.length; x++) {
        // console.log("here")
        // console.log(data[x].length)
        for (let y = 0; y< data[x].length; y++) {
            // data[x][y].map((x) => {

            // })
            if (data[x][y].includes(currentNum)){
                // console.log("found one")
                data[x][y][data[x][y].indexOf(currentNum)] = parseInt(currentNum)
            } 
            // console.log(data[x][y])
            
        }
     
        if (verify(data[x])) {
            // console.log(data[x])
            final[1] = data[x]
            final[0] = false
            final[2] = currentNum
            break
        }
    }


    counter++
    // console.log(counter)
    if (counter > data.length-1) {
        final[0] = false
    }
}

// console.log(data[final[1]])
console.log(final[1])
console.log(final[2])
let finNum = 0
for (let elem = 0; elem < final[1].length; elem++) {
    for (elem2 = 0; elem2 < final[1][elem].length; elem2++){
        // console.log((final[1][elem][elem2]))
        if (typeof(final[1][elem][elem2]) == typeof("this")) {
            // console.log((final[1][elem][elem2]))
            finNum += parseInt((final[1][elem][elem2]))
        }
    }
}
console.log(finNum * 90)