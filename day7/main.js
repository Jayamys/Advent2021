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
data = data[0].map((x) => {
    return parseInt(x)
})
let max = Math.max(...data)
let min = Math.min(...data)
console.log("%d\t%d",min,max)
let fuelArr = []
let point = 99999

for(let meetingPoint = min; meetingPoint <= max; meetingPoint++) {
    let newpoint = 0
    for (let x = 0; x < data.length; x++){
        let curr = data[x]
        
        if (curr < meetingPoint){
            let diff = meetingPoint- curr
            let totFuel = 0
            for (let y = 1; y <= diff; y++) {
                totFuel += y
            }
            newpoint = newpoint + totFuel
            
            
        } else if (curr > meetingPoint){
            let diff = curr - meetingPoint
            let totFuel = 0
            for (let y = 1; y <= diff; y++) {
                totFuel += y
            }
            newpoint = newpoint + totFuel
            
        }
    }
    if(meetingPoint == min) {
        point = newpoint
    }
    else if (newpoint < point){
        point = newpoint
    }
}
console.log(point)

