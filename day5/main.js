const getData = require("../../script.js");

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
    let y =  x.split(" -> ")
    let k = [y[0].split(","), y[1].split(",")]
    for (let j = 0; j < 2; j++){
        k[0][j] = parseInt(k[0][j])
        k[1][j] = parseInt(k[1][j])
    }
    return {
        x1 : k[0][0],
        y1 : k[0][1],
        x2 : k[1][0],
        y2 : k[1][1]
        
    }
})

let newdat = data.filter((x) => {
    if(x.x1 == x.x2 || x.y1 == x.y2) {
        return true
    }
})

function returnPoints(x1, x2, y1, y2) {
    let list = []
    if (x1 == x2) {
        let x = x1
        let low = (y1 > y2) ? y2 : y1
        let high = (y1 > y2) ? y1 : y2
        // console.log("Low: %d \t High: %d", low, high)
        for (var i = low; i <= high; i++){
            list.push([x, i])
        }
    } else if (y1 == y2){
        let y = y1
        let low = (x1 > x2) ? x2 : x1
        let high = (x1 > x2) ? x1 : x2
        for (var i = low; i <= high; i++){
            list.push([i ,y])
        }
    }
    return list
}
let final = {}
let counted = []
let count = 0
for (let ind = 0; ind < newdat.length; ind++){
    // if (newdat[index].x1 == newdat[index].x2) {
    //     let statx = newdat[index].x1;
        
    // }
    let coord = returnPoints(newdat[ind].x1, newdat[ind].x2, newdat[ind].y1, newdat[ind].y2)
    // console.log(coord[1])
    for (let j = 0; j < coord.length; j++){
        // console.log(coord[j])
        // console.log(coord[j][0])
        let keey = coord[j][0]
        let val = coord[j][1]
        // console.log(keey + " " + val)
        if (keey in final) {
            let temparr = final[keey]
            temparr.push(val)
            final[keey] = temparr
        }
        else {
            final[keey] = [val]
        }
    }
    
}


let finalX = Object.keys(final)
let cc = 0
for (let l = 0; l < finalX.length; l++){
    let counterArr = []
    let secondArr = []
    let currentKey = finalX[l]
    for (let p = 0; p < final[currentKey].length;p++){
        let elem = final[currentKey][p]
        if(!(elem in counterArr)){
            counterArr.push(elem)
            // console.log(counterArr)
        } else if (!(elem in secondArr)){
            secondArr.push(elem)
            console.log(counterArr)
            cc++
        }
    }

}
console.log(cc)



// console.log(newdat)