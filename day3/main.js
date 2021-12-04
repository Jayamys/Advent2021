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
    return  x.split("")
})
let final = [0,0,0,0,0,0,0,0,0,0,0,0]
for (let x = 0; x< data.length; x++){
    for (let y = 0; y< data[0].length; y++){
        if (data[x][y] == '1') {
            final[y] += 1
        } else if (data[x][y] == '0') {
            final[y] -= 1
        }
    }
}

console.log(final)
let tf = ""
let tg = ""
for (let x = 0; x< final.length; x++){
    if (final[x] > 0) {
        final[x] = 1
        tf = tf + "1"
        tg = tg + "0"
    } else {
        final[x] = 0
        tf = tf + "0"
        tg = tg + "1"
    }
}
console.log(final)
console.log(tf)
console.log(parseInt(tf, 2) * parseInt(tg, 2))

