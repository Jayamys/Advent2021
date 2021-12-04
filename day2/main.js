const getData = require("./script.js");

let data = getData("\n");

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
    return [x.split(" ")[0][0], parseInt(x.split(" ")[1])]
})

let h = 0;
let d = 0;
let a = 0;
data.filter( (x) => {
    if(x[0] == 'f') {
        h = h + x[1]
        d = d + (x[1]*a)
    } else if (x[0] == 'd') {
        a = a + x[1]
    } else if (x[0] == 'u') {
        a = a - x[1]
    }
    return
})

console.log("h: %d \t d: %d \t and final: ", h,d, (d*h))