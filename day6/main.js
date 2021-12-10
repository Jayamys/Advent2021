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
    return  x.split(",")
})

data = data[0]
data = data.map( function(x) { return parseInt(x)
})
console.log(data.length)

fishArr = data
// fishArr2 = fishArr.splice(0,split)
// fishArr3 = fishArr.splice(0, split)
// fishArr4 = fishArr.splice(0,split)
testArr = [3,4,3,1,2]
// console.log(fishArr.length)
// console.log(fishArr2.length)
// console.log(fishArr3.length)
// console.log(fishArr4.length)
function tick (fishArr) {
    for (let index = 0; index < fishArr.length; index++){
        if (fishArr[index] <1) {
            fishArr[index] = 6;
            fishArr.push(9)
        } else {
            fishArr[index]--
        }
    }
    // console.log(fishArr)
}

// for(let x = 0; x < (256/2); x++){
//     tick(fishArr)
// }
let split = fishArr.length/300

let cc = 0
for(let y = 0; y < 300; y++){
    fishArr2 = fishArr.splice(0,split)
    for(let x = 0; x < (256); x++){
        
        tick(fishArr2)
    }
    cc += fishArr2.length
    
        console.log(y)
    
}
console.log(cc)

//possible workaround would be to create a dict with all the numbers from 0 to 8, and it would shift numbers from one
//to the next, and just count like that... rather than infinite array