const fs = require('fs');

function getData(sep = "\n", fileLocation = "./input.txt") {
    try {
        return fs.readFileSync(fileLocation, 'utf8').split(sep)
    } catch (err) {
        console.error(err)
    }
}

module.exports = getData;

// let data = getData();