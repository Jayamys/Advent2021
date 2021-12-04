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
        // if (true) {
            
        // } else if (true) {
        //     f
        // }
    }
}

function reducer (arr, pos, match) {

    return arr.filter( (x) => {
        if (parseInt(x[pos]) == match){
            return true
        }
    })
   
}

function counter (arr, pos, tokeep, trig = true) {
    let ans = 0
    for (let x = 0; x < arr.length; x++) {
        if (arr[x][pos] == "0"){
            ans = ans - 1
        } else if (arr[x][pos] == "1") {
            ans = ans + 1
        }
    }
    if (ans > 0 && trig){
        return 1
    } else if (ans < 0 && trig){
        return 0
    } else if ( ans > 0 && !trig) {
        return 0
    } else if (ans < 0 && !trig) {
        return 1
    } else return tokeep
}

let data2 = [...data]
for (let x = 0; data.length > 1; x++) {
    data = reducer(data, x, counter(data, x, 0, trig = false))
}

for (let x = 0; data2.length > 1; x++) {
    data2 = reducer(data2, x, counter(data2, x, 1))
}

console.log(data[0])
console.log(data2[0])
let one = ""
let two = ""
for (let x = 0; x < data[0].length; x++) {
    one += data[0][x]
    two += data2[0][x]
}
console.log(one)
console.log(two)
console.log(parseInt(one,2) * parseInt(two, 2))
// data[0].map((x) => {
//     x = x[0] + x[1] + x[2] + x[3] + x[4] + x[5] + x[6] + x[7] + x[8] + x[9] + x[10] + x[11]
// })
// data2[0].map((x) => {
//     x = x[0] + x[1] + x[2] + x[3] + x[4] + x[5] + x[6] + x[7] + x[8] + x[9] + x[10] + x[11]
// })
// console.log(parseInt(data[0]))
// console.log(parseInt(data2[0]))

// console.log(final)
// let tf = ""
// let tg = ""
// for (let x = 0; x< final.length; x++){
//     if (final[x] > 0) {
//         final[x] = 1
//         tf = tf + "1"
//         tg = tg + "0"
//     } else {
//         final[x] = 0
//         tf = tf + "0"
//         tg = tg + "1"
//     }
// // }
// console.log(final)
// console.log(tf)
// console.log(parseInt(tf, 2) * parseInt(tg, 2))

