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

data = data.map( function(x) { return parseInt(x)
})

let count = 0;

for (let x = 0; x < data.length-3; x++) {
    let first = data[x] + data[x+1] + data[x+2]
    let second = data[x+1] + data[x+2] + data[x+3]
    if (second > first) {
        count++
    }
}

console.log(count)